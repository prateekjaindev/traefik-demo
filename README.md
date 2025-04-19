# Traefik Demo Stack

This is a simple demonstration of Traefik as a reverse proxy with multiple services.

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
- Frontend:
  - App Frontend: https://app.yourdomain.com
  - Admin Frontend: https://admin.yourdomain.com
- Backend:
  - Backend 1: https://api.yourdomain.com/backend1
  - Backend 2: https://api.yourdomain.com/backend2
- Metrics Endpoints:
  - Traefik Metrics: https://traefik.yourdomain.com/metrics
  - Prometheus: https://prometheus.yourdomain.com

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