# Multi-stage Dockerfile for Mesh MDM Linux Deployment
# Use Debian glibc-based Golang image so Go auto-toolchain (Go >= 1.26) executes smoothly
FROM golang:bookworm AS builder

WORKDIR /src
RUN apt-get update && apt-get install -y --no-install-recommends git ca-certificates && rm -rf /var/lib/apt/lists/*

ENV GOTOOLCHAIN=auto

# Copy full source tree so local tool packages resolve properly
COPY . .

# Generate embedded assets before compilation (frontend templates, React HTML, logos)
RUN go run -mod=mod github.com/kevinburke/go-bindata/go-bindata -pkg=bindata -tags full \
    -o=server/bindata/generated.go \
    frontend/templates/ assets/... server/mail/templates

RUN CGO_ENABLED=0 GOOS=linux GOARCH=amd64 go build -mod=mod -tags full -ldflags="-w -s" -o /bin/meshmdm ./cmd/fleet
RUN CGO_ENABLED=0 GOOS=linux GOARCH=amd64 go build -mod=mod -tags full -ldflags="-w -s" -o /bin/meshmdmctl ./cmd/fleetctl

# Final lightweight runtime image
FROM alpine:3.20

RUN apk add --no-cache ca-certificates tzdata
WORKDIR /meshmdm

COPY --from=builder /bin/meshmdm /usr/local/bin/meshmdm
COPY --from=builder /bin/meshmdmctl /usr/local/bin/meshmdmctl

EXPOSE 8080

ENTRYPOINT ["/usr/local/bin/meshmdm"]
CMD ["serve"]
