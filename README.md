# Traefik Demo Stack

This is a simple demonstration of Traefik as a reverse proxy with multiple services.

## Services

- Frontend applications:
  - app.prateekjain.dev: Main application frontend
  - admin.prateekjain.dev: Admin panel frontend
- Backend services:
  - api.prateekjain.dev/backend1: First backend service
  - api.prateekjain.dev/backend2: Second backend service
- Traefik Dashboard:
  - traefik.prateekjain.dev: Traefik dashboard
- Monitoring:
  - prometheus.prateekjain.dev: Prometheus metrics dashboard
  - traefik.prateekjain.dev/metrics: Traefik metrics endpoint
  - api.prateekjain.dev/backend1/metrics: Backend1 metrics endpoint
  - api.prateekjain.dev/backend2/metrics: Backend2 metrics endpoint

## Prerequisites

- Docker
- Docker Compose

## Setup

1. **DNS Configuration:** Ensure you have the following DNS records pointing to your server's IP address:
   - `app.prateekjain.dev`
   - `admin.prateekjain.dev`
   - `api.prateekjain.dev`
   - `traefik.prateekjain.dev`
   - `prometheus.prateekjain.dev`

2. Start the stack:
```bash
docker-compose up -d
```

## Accessing the Services

- Traefik Dashboard: http://traefik.prateekjain.dev
- App Frontend: http://app.prateekjain.dev
- Admin Frontend: http://admin.prateekjain.dev
- Backend 1: http://api.prateekjain.dev/backend1
- Backend 2: http://api.prateekjain.dev/backend2
- Prometheus: http://prometheus.prateekjain.dev
- Metrics Endpoints:
  - Traefik Metrics: http://traefik.prateekjain.dev/metrics
  - Backend1 Metrics: http://api.prateekjain.dev/backend1/metrics
  - Backend2 Metrics: http://api.prateekjain.dev/backend2/metrics

## Stopping the Stack

```bash
docker-compose down
```