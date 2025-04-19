# Traefik Demo Stack

This is a simple demonstration of Traefik as a reverse proxy with multiple services.

## Services

- Frontend applications:
  - app.yourdomain.com: Main application frontend
  - admin.yourdomain.com: Admin panel frontend
- Backend services:
  - api.yourdomain.com/backend1: First backend service
  - api.yourdomain.com/backend2: Second backend service
- Traefik Dashboard:
  - traefik.yourdomain.com: Traefik dashboard
- Monitoring:
  - prometheus.yourdomain.com: Prometheus metrics dashboard
  - traefik.yourdomain.com/metrics: Traefik metrics endpoint
  - api.yourdomain.com/backend1/metrics: Backend1 metrics endpoint
  - api.yourdomain.com/backend2/metrics: Backend2 metrics endpoint

## Prerequisites

- Docker
- Docker Compose

## Setup

1. **DNS Configuration:** Ensure you have the following DNS records pointing to your server's IP address:
   - `app.yourdomain.com`
   - `admin.yourdomain.com`
   - `api.yourdomain.com`
   - `traefik.yourdomain.com`
   - `prometheus.yourdomain.com`

2. Start the stack:
```bash
docker-compose up -d
```

## Accessing the Services

- Traefik Dashboard: https://traefik.yourdomain.com
- App Frontend: https://app.yourdomain.com
- Admin Frontend: https://admin.yourdomain.com
- Backend 1: https://api.yourdomain.com/backend1
- Backend 2: https://api.yourdomain.com/backend2
- Prometheus: https://prometheus.yourdomain.com
- Metrics Endpoints:
  - Traefik Metrics: https://traefik.yourdomain.com/metrics
  - Backend1 Metrics: https://api.yourdomain.com/backend1/metrics
  - Backend2 Metrics: https://api.yourdomain.com/backend2/metrics

## Docker Compose Configuration

The application utilizes Docker Compose for defining and managing multi-container Docker applications. Key aspects of the configuration include:

### Networks

The following networks are defined:

- `app-network`: A bridge network for the application's services.
- `monitoring-network`: A bridge network for monitoring-related services.

These networks enable communication between the services. `app-network` connects all the services and `monitoring-network` is used to connect traefik and prometheus.

### Volumes

The following volumes are defined:

- `prometheus_data`: A local volume to store Prometheus data.
- `letsencrypt`: A local volume to store Let's Encrypt certificates for secure communication.

These volumes persist data across container restarts.

## Stopping the Stack

```bash
docker-compose down
```