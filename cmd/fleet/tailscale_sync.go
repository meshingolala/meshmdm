package main

import (
	"bytes"
	"context"
	"encoding/json"
	"fmt"
	"io"
	"log/slog"
	"net/http"
	"os"

	"github.com/fleetdm/fleet/v4/server/fleet"
	"github.com/jmoiron/sqlx"
)

func tailscaleConditionalAccessSync(ctx context.Context, ds fleet.Datastore, logger *slog.Logger) error {
	apiKey := os.Getenv("TAILSCALE_API_KEY")
	tailnet := os.Getenv("TAILSCALE_TAILNET")

	if apiKey == "" || tailnet == "" {
		// Just skip silently if not configured
		return nil
	}

	// 1. Get all failing hosts
	db, ok := ds.(interface{ GetMySQLDB() *sqlx.DB })
	if !ok {
		return fmt.Errorf("datastore does not support raw SQL")
	}

	query := `
		SELECT DISTINCT h.hostname
		FROM hosts h
		JOIN policy_membership pm ON h.id = pm.host_id
		JOIN policies p ON pm.policy_id = p.id
		WHERE pm.passes = 0 AND p.conditional_access_enabled = true
	`
	var failingHostnames []string
	if err := db.GetMySQLDB().SelectContext(ctx, &failingHostnames, query); err != nil {
		return fmt.Errorf("querying failing hosts: %w", err)
	}
    
    // Create a set of failing hostnames
    failingMap := make(map[string]bool)
    for _, h := range failingHostnames {
        failingMap[h] = true
    }

	// 2. Fetch Tailscale devices
	devicesURL := fmt.Sprintf("https://api.tailscale.com/api/v2/tailnet/%s/devices", tailnet)
	req, _ := http.NewRequestWithContext(ctx, "GET", devicesURL, nil)
	req.SetBasicAuth(apiKey, "")

	resp, err := http.DefaultClient.Do(req)
	if err != nil {
		return fmt.Errorf("fetching tailscale devices: %w", err)
	}
	defer resp.Body.Close()

	if resp.StatusCode != 200 {
        b, _ := io.ReadAll(resp.Body)
		return fmt.Errorf("tailscale api error: %s", string(b))
	}

	var devicesResp struct {
		Devices []struct {
			ID       string   `json:"id"`
			Hostname string   `json:"hostname"`
			Tags     []string `json:"tags"`
		} `json:"devices"`
	}
	if err := json.NewDecoder(resp.Body).Decode(&devicesResp); err != nil {
		return fmt.Errorf("decoding tailscale devices: %w", err)
	}

	// 3. Reconcile tags
	for _, dev := range devicesResp.Devices {
		isFailing := failingMap[dev.Hostname]
		hasQuarantineTag := false
		for _, tag := range dev.Tags {
			if tag == "tag:quarantined" {
				hasQuarantineTag = true
				break
			}
		}

		if isFailing && !hasQuarantineTag {
			// Needs quarantine
			if err := updateTailscaleTags(ctx, apiKey, tailnet, dev.ID, append(dev.Tags, "tag:quarantined")); err != nil {
				logger.ErrorContext(ctx, "failed to quarantine tailscale device", "hostname", dev.Hostname, "err", err)
			} else {
				logger.InfoContext(ctx, "quarantined tailscale device", "hostname", dev.Hostname)
			}
		} else if !isFailing && hasQuarantineTag {
			// Needs restoration
			var newTags []string
			for _, tag := range dev.Tags {
				if tag != "tag:quarantined" {
					newTags = append(newTags, tag)
				}
			}
			if err := updateTailscaleTags(ctx, apiKey, tailnet, dev.ID, newTags); err != nil {
				logger.ErrorContext(ctx, "failed to restore tailscale device", "hostname", dev.Hostname, "err", err)
			} else {
				logger.InfoContext(ctx, "restored tailscale device", "hostname", dev.Hostname)
			}
		}
	}

	return nil
}

func updateTailscaleTags(ctx context.Context, apiKey, tailnet, deviceID string, tags []string) error {
	url := fmt.Sprintf("https://api.tailscale.com/api/v2/tailnet/%s/devices/%s/tags", tailnet, deviceID)
	body, _ := json.Marshal(map[string]any{"tags": tags})
	req, _ := http.NewRequestWithContext(ctx, "POST", url, bytes.NewReader(body))
	req.SetBasicAuth(apiKey, "")
	req.Header.Set("Content-Type", "application/json")

	resp, err := http.DefaultClient.Do(req)
	if err != nil {
		return err
	}
	defer resp.Body.Close()
	if resp.StatusCode >= 300 {
		b, _ := io.ReadAll(resp.Body)
		return fmt.Errorf("status %d: %s", resp.StatusCode, string(b))
	}
	return nil
}
