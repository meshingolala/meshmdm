# Multi-stage Dockerfile for Mesh MDM Linux Deployment
FROM golang:1.24-alpine AS builder

WORKDIR /src
RUN apk add --no-cache git ca-certificates

ENV GOTOOLCHAIN=local

# Copy full source tree so local tool packages (e.g. server/goose) resolve properly
COPY . .

RUN CGO_ENABLED=0 GOOS=linux GOARCH=amd64 go build -mod=mod -tags full -ldflags="-w -s" -o /bin/meshmdm ./cmd/fleet
RUN CGO_ENABLED=0 GOOS=linux GOARCH=amd64 go build -mod=mod -tags full -ldflags="-w -s" -o /bin/meshmdmctl ./cmd/fleetctl

FROM alpine:3.20

RUN apk add --no-cache ca-certificates tzdata
WORKDIR /meshmdm

COPY --from=builder /bin/meshmdm /usr/local/bin/meshmdm
COPY --from=builder /bin/meshmdmctl /usr/local/bin/meshmdmctl

EXPOSE 8080

ENTRYPOINT ["/usr/local/bin/meshmdm"]
CMD ["serve"]
