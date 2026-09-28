# Multi-stage Dockerfile for Mesh MDM Linux Deployment
FROM golang:bookworm AS builder

WORKDIR /src
RUN apt-get update && apt-get install -y --no-install-recommends git ca-certificates && rm -rf /var/lib/apt/lists/*

ENV GOTOOLCHAIN=auto

# Copy full source tree so local tool packages resolve properly
COPY . .

# 1. Generate embedded assets before compilation (frontend templates, React HTML, logos)
RUN go run -mod=mod github.com/kevinburke/go-bindata/go-bindata -pkg bindata -tags full \
    -ignore "\.(mp4|gif)" \
    -o server/bindata/generated.go \
    frontend/templates/ assets/... server/mail/templates

# 2. Build the Mesh MDM server binary and immediately clean cache to conserve disk space
RUN CGO_ENABLED=0 GOOS=linux GOARCH=amd64 go build -mod=mod -tags full -ldflags="-w -s" -o /bin/meshmdm ./cmd/fleet && \
    rm -rf /root/.cache/go-build /tmp/*

# Final lightweight runtime image
FROM alpine:3.20

RUN apk add --no-cache ca-certificates tzdata
WORKDIR /meshmdm

COPY --from=builder /bin/meshmdm /usr/local/bin/meshmdm

EXPOSE 8080

ENTRYPOINT []
CMD ["sh", "-c", "meshmdm prepare db --no-prompt && meshmdm serve"]

