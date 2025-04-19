# Traefik Demo Stack

This is a simple demonstration of Traefik as a reverse proxy with multiple services.

## Services

- Frontend applications:
  - app.local.com: Main application frontend
  - admin.local.com: Admin panel frontend
- Backend services:
  - api.local.com/backend1: First backend service
  - api.local.com/backend2: Second backend service
- Traefik Dashboard:
  - traefik.local.com: Traefik dashboard
- Monitoring:
  - prometheus.local.com: Prometheus metrics dashboard
  - traefik.local.com/metrics: Traefik metrics endpoint
  - api.local.com/backend1/metrics: Backend1 metrics endpoint
  - api.local.com/backend2/metrics: Backend2 metrics endpoint

## Prerequisites

- Docker
- Docker Compose

## Setup

1. Add the following entries to your `/etc/hosts` file:
```
127.0.0.1 app.local.com
127.0.0.1 admin.local.com
127.0.0.1 api.local.com
127.0.0.1 traefik.local.com
127.0.0.1 prometheus.local.com
```

2. Start the stack:
```bash
docker-compose up -d
```

## Accessing the Services

- Traefik Dashboard: http://traefik.local.com
- App Frontend: http://app.local.com
- Admin Frontend: http://admin.local.com
- Backend 1: http://api.local.com/backend1
- Backend 2: http://api.local.com/backend2
- Prometheus: http://prometheus.local.com
- Metrics Endpoints:
  - Traefik Metrics: http://traefik.local.com/metrics
  - Backend1 Metrics: http://api.local.com/backend1/metrics
  - Backend2 Metrics: http://api.local.com/backend2/metrics

## Stopping the Stack

```bash
docker-compose down
``` 