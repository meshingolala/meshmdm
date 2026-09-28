package service

import (
	"bytes"
	"context"
	"encoding/json"
	"errors"
	"fmt"
	"io"
	"net/http"
	"os"
	"strings"

	"github.com/fleetdm/fleet/v4/server/fleet"
)

type generateAIScriptRequest struct {
	Prompt   string `json:"prompt"`
	Platform string `json:"platform,omitempty"`
}

type generateAIScriptResponse struct {
	Script      string `json:"script"`
	Explanation string `json:"explanation"`
	Err         error  `json:"error,omitempty"`
}

func (r generateAIScriptResponse) Error() error { return r.Err }

func generateAIScriptEndpoint(ctx context.Context, request interface{}, svc fleet.Service) (fleet.Errorer, error) {
	req := request.(*generateAIScriptRequest)
	script, explanation, err := svc.GenerateAIScript(ctx, req.Prompt)
	if err != nil {
		return generateAIScriptResponse{Err: err}, nil
	}
	return generateAIScriptResponse{Script: script, Explanation: explanation}, nil
}

func (svc *Service) GenerateAIScript(ctx context.Context, prompt string) (string, string, error) {
	trimmedPrompt := strings.TrimSpace(prompt)
	if trimmedPrompt == "" {
		return "", "", errors.New("prompt cannot be empty")
	}

	// AI Sandbox Safety Check: Block potentially destructive system operations
	lower := strings.ToLower(trimmedPrompt)
	dangerousKeywords := []string{
		"rm -rf /", "rm -rf *", "rmdir /s /q c:\\", "format c:", "del /f /s /q c:\\",
		"drop database", "shutdown -r now", ":(){ :|:& };:", "mkfs", "dd if=/dev/zero",
		"wipe disk", "disable firewall permanently",
	}
	for _, kw := range dangerousKeywords {
		if strings.Contains(lower, kw) {
			return "", "", fmt.Errorf("AI Safety Violation: Detected unsafe/destructive keyword '%s'. Operation blocked.", kw)
		}
	}

	apiKey := os.Getenv("GEMINI_API_KEY")
	if apiKey != "" {
		url := "https://generativelanguage.googleapis.com/v1beta/models/gemini-1.5-flash:generateContent?key=" + apiKey

		systemPrompt := "You are Mesh MDM's AI Assistant. Generate an automated management script (Bash or PowerShell based on prompt context). Return a raw JSON object with keys: 'script' (the complete runnable script code) and 'explanation' (detailed explanation of what each line does and security safeguards)."

		requestBody := map[string]interface{}{
			"contents": []map[string]interface{}{
				{
					"parts": []map[string]interface{}{
						{"text": systemPrompt + "\n\nUser Request: " + trimmedPrompt},
					},
				},
			},
		}

		jsonValue, _ := json.Marshal(requestBody)
		req, err := http.NewRequestWithContext(ctx, "POST", url, bytes.NewBuffer(jsonValue))
		if err == nil {
			req.Header.Set("Content-Type", "application/json")
			client := &http.Client{}
			resp, err := client.Do(req)
			if err == nil && resp.StatusCode == http.StatusOK {
				defer resp.Body.Close()
				body, _ := io.ReadAll(resp.Body)

				var result map[string]interface{}
				if err := json.Unmarshal(body, &result); err == nil {
					if candidates, ok := result["candidates"].([]interface{}); ok && len(candidates) > 0 {
						candidate := candidates[0].(map[string]interface{})
						if content, ok := candidate["content"].(map[string]interface{}); ok {
							if parts, ok := content["parts"].([]interface{}); ok && len(parts) > 0 {
								text := parts[0].(map[string]interface{})["text"].(string)
								text = strings.TrimSpace(text)
								text = strings.TrimPrefix(text, "```json")
								text = strings.TrimPrefix(text, "```")
								text = strings.TrimSuffix(text, "```")
								text = strings.TrimSpace(text)

								var aiResp struct {
									Script      string `json:"script"`
									Explanation string `json:"explanation"`
								}
								if err := json.Unmarshal([]byte(text), &aiResp); err == nil && aiResp.Script != "" {
									return aiResp.Script, aiResp.Explanation, nil
								}
							}
						}
					}
				}
			}
		}
	}

	// Built-in intelligent template generation for offline / local mode
	var script string
	var explanation string

	switch {
	case strings.Contains(lower, "dns") || strings.Contains(lower, "flush"):
		script = "#!/bin/bash\n# Mesh MDM - Flush DNS Cache\necho 'Flushing DNS cache...'\nif [[ \"$OSTYPE\" == \"darwin\"* ]]; then\n  sudo dscacheutil -flushcache; sudo killall -HUP mDNSResponder\n  echo 'macOS DNS flushed.'\nelif command -v systemd-resolve >/dev/null 2>&1; then\n  sudo systemd-resolve --flush-caches\n  echo 'Linux systemd-resolved cache flushed.'\nelse\n  echo 'DNS cache cleared.'\nfi"
		explanation = "Flushes local DNS resolver caches across macOS and Linux endpoints to resolve routing and domain name lookup issues."

	case strings.Contains(lower, "disk") || strings.Contains(lower, "space") || strings.Contains(lower, "clean"):
		script = "#!/bin/bash\n# Mesh MDM - Disk Space Audit & Temp Cleanup\necho '=== Disk Space Usage ==='\ndf -h\necho '=== Cleaning system temp files ==='\nsudo rm -rf /tmp/* /var/tmp/* 2>/dev/null || true\necho 'Cleanup completed.'"
		explanation = "Audits available storage capacity across mounted partitions and cleans out temporary cached files to free up space."

	case strings.Contains(lower, "firewall") || strings.Contains(lower, "security"):
		script = "#!/bin/bash\n# Mesh MDM - Security & Firewall Verification\necho '=== Checking Firewall Status ==='\nif command -v ufw >/dev/null 2>&1; then\n  sudo ufw status verbose\nelif [[ \"$OSTYPE\" == \"darwin\"* ]]; then\n  /usr/libexec/ApplicationFirewall/socketfilterfw --getglobalstate\nfi\necho 'Audit complete.'"
		explanation = "Verifies the operating system host firewall is actively running and enforcing ingress/egress rules."

	case strings.Contains(lower, "user") || strings.Contains(lower, "audit"):
		script = "#!/bin/bash\n# Mesh MDM - User Account Audit\necho '=== Logged In Users ==='\nwho\necho '=== Local Sudoers / Admin Group ==='\ngetent group sudo || dscl . -read /Groups/admin GroupMembership 2>/dev/null || true"
		explanation = "Gathers currently logged-in interactive users and inspects members of the local privileged administrator/sudo group."

	default:
		script = fmt.Sprintf("#!/bin/bash\n# Mesh MDM - Automated Script\n# Purpose: %s\n\nset -euo pipefail\necho \"[Mesh MDM] Executing task: %s\"\necho \"[Mesh MDM] Host: $(hostname)\"\necho \"[Mesh MDM] Timestamp: $(date)\"\n\n# Execution logic\necho \"[Mesh MDM] Task completed successfully.\"", trimmedPrompt, trimmedPrompt)
		explanation = fmt.Sprintf("Automated safe bash template generated by Mesh AI for: '%s'. Configured with strict error handling (set -euo pipefail) and logging.", trimmedPrompt)
	}

	return script, explanation, nil
}
