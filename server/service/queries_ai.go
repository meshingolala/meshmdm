package service

import (
	"bytes"
	"context"
	"encoding/json"
	"fmt"
	"io"
	"net/http"
	"os"
	"strings"

	"github.com/fleetdm/fleet/v4/server/fleet"
)

type generateAIQueryRequest struct {
	Prompt string `json:"prompt"`
}

type generateAIQueryResponse struct {
	SQL string `json:"sql"`
	Explanation string `json:"explanation"`
	Err error  `json:"error,omitempty"`
}

func (r generateAIQueryResponse) Error() error { return r.Err }

func generateAIQueryEndpoint(ctx context.Context, request interface{}, svc fleet.Service) (fleet.Errorer, error) {
	req := request.(*generateAIQueryRequest)
	sql, explanation, err := svc.GenerateAIQuery(ctx, req.Prompt)
	if err != nil {
		return generateAIQueryResponse{Err: err}, nil
	}
	return generateAIQueryResponse{SQL: sql, Explanation: explanation}, nil
}

func (svc *Service) GenerateAIQuery(ctx context.Context, prompt string) (string, string, error) {
	apiKey := os.Getenv("GEMINI_API_KEY")
	if apiKey == "" {
		return "", "", fmt.Errorf("GEMINI_API_KEY is not set on the server")
	}

	url := "https://generativelanguage.googleapis.com/v1beta/models/gemini-1.5-flash:generateContent?key=" + apiKey

	requestBody := map[string]interface{}{
		"contents": []map[string]interface{}{
			{
				"parts": []map[string]interface{}{
					{"text": "Convert this natural language query into an osquery SQL query for Fleet. Return a JSON object with two fields: 'sql' (the query string) and 'explanation' (a brief human-readable explanation of what the query does).\n\nQuery: " + prompt},
				},
			},
		},
	}

	jsonValue, _ := json.Marshal(requestBody)

	req, err := http.NewRequestWithContext(ctx, "POST", url, bytes.NewBuffer(jsonValue))
	if err != nil {
		return "", "", err
	}
	req.Header.Set("Content-Type", "application/json")

	client := &http.Client{}
	resp, err := client.Do(req)
	if err != nil {
		return "", "", err
	}
	defer resp.Body.Close()

	body, _ := io.ReadAll(resp.Body)

	var result map[string]interface{}
	if err := json.Unmarshal(body, &result); err != nil {
		return "", "", fmt.Errorf("failed to parse gemini response: %s", string(body))
	}

	candidates, ok := result["candidates"].([]interface{})
	if !ok || len(candidates) == 0 {
		return "", "", fmt.Errorf("no candidates in response: %s", string(body))
	}

	candidate := candidates[0].(map[string]interface{})
	content := candidate["content"].(map[string]interface{})
	parts := content["parts"].([]interface{})
	text := parts[0].(map[string]interface{})["text"].(string)

	text = strings.TrimSpace(text)
	text = strings.TrimPrefix(text, "`sql")
	text = strings.TrimPrefix(text, "`")
	text = strings.TrimSuffix(text, "`")
	text = strings.TrimSpace(text)

		var aiResp struct {
		SQL         string `json:"sql"`
		Explanation string `json:"explanation"`
	}
	if err := json.Unmarshal([]byte(text), &aiResp); err != nil {
		// fallback if it didn't return json
		aiResp.SQL = text
		aiResp.Explanation = "Explanation not provided by AI."
	}
	
	aiResp.SQL = strings.TrimSpace(aiResp.SQL)
	
	// Safety Sandbox check
	if !strings.HasPrefix(strings.ToUpper(aiResp.SQL), "SELECT") {
		return "", "", fmt.Errorf("AI Safety Violation: Generated query must be a read-only SELECT statement. Generated: %s", aiResp.SQL)
	}

	return aiResp.SQL, aiResp.Explanation, nil
}
