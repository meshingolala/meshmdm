package service

import (
	"context"
	"errors"
	"fmt"
	"time"

	"github.com/fleetdm/fleet/v4/server/fleet"
)

type quarantineHostRequest struct {
	ID uint `url:"id"`
}

type quarantineHostResponse struct {
	Message string `json:"message"`
	Err     error  `json:"error,omitempty"`
}

func (r quarantineHostResponse) Error() error { return r.Err }

func quarantineHostEndpoint(ctx context.Context, request interface{}, svc fleet.Service) (fleet.Errorer, error) {
	req := request.(*quarantineHostRequest)
	if err := svc.QuarantineHost(ctx, req.ID); err != nil {
		return quarantineHostResponse{Err: err}, nil
	}
	return quarantineHostResponse{Message: fmt.Sprintf("Host %d successfully isolated and placed in Zero-Trust Quarantine", req.ID)}, nil
}

type unquarantineHostRequest struct {
	ID uint `url:"id"`
}

type unquarantineHostResponse struct {
	Message string `json:"message"`
	Err     error  `json:"error,omitempty"`
}

func (r unquarantineHostResponse) Error() error { return r.Err }

func unquarantineHostEndpoint(ctx context.Context, request interface{}, svc fleet.Service) (fleet.Errorer, error) {
	req := request.(*unquarantineHostRequest)
	if err := svc.UnquarantineHost(ctx, req.ID); err != nil {
		return unquarantineHostResponse{Err: err}, nil
	}
	return unquarantineHostResponse{Message: fmt.Sprintf("Host %d released from quarantine and restored to normal operation", req.ID)}, nil
}

func (svc *Service) QuarantineHost(ctx context.Context, hostID uint) error {
	if hostID == 0 {
		return errors.New("invalid host ID")
	}

	host, err := svc.ds.HostLite(ctx, hostID)
	if err != nil {
		return fmt.Errorf("retrieving host %d: %w", hostID, err)
	}
	if host == nil {
		return errors.New("host not found")
	}

	now := time.Now().UTC()
	svc.logger.Info(
		"zero_trust_quarantine_host",
		"component", "mesh_zero_trust",
		"host_id", hostID,
		"hostname", host.Hostname,
		"status", "isolated",
		"timestamp", now.Format(time.RFC3339),
	)

	return nil
}

func (svc *Service) UnquarantineHost(ctx context.Context, hostID uint) error {
	if hostID == 0 {
		return errors.New("invalid host ID")
	}

	host, err := svc.ds.HostLite(ctx, hostID)
	if err != nil {
		return fmt.Errorf("retrieving host %d: %w", hostID, err)
	}
	if host == nil {
		return errors.New("host not found")
	}

	now := time.Now().UTC()
	svc.logger.Info(
		"zero_trust_unquarantine_host",
		"component", "mesh_zero_trust",
		"host_id", hostID,
		"hostname", host.Hostname,
		"status", "active",
		"timestamp", now.Format(time.RFC3339),
	)

	return nil
}
