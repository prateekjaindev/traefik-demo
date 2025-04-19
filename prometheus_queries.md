# Prometheus Queries for Traefik Demo

## Backend1 Service Metrics

### Request Rate
```promql
rate(backend1_requests_total[5m])
```
Shows the request rate per second over the last 5 minutes.

### Total Requests by Path
```promql
sum(backend1_requests_total) by (path)
```
Shows the total number of requests grouped by path.

### Error Rate (if you add error tracking)
```promql
rate(backend1_errors_total[5m])
```

## System Metrics

### CPU Usage
```promql
rate(process_cpu_seconds_total[5m]) * 100
```
Shows CPU usage percentage.

### Memory Usage
```promql
process_resident_memory_bytes
```
Shows the resident memory usage in bytes.

### Node.js Event Loop Lag
```promql
nodejs_eventloop_lag_seconds
```
Shows the event loop lag in seconds.

## Traefik Metrics

### Request Rate by Service
```promql
rate(traefik_service_requests_total[5m])
```
Shows the request rate per service.

### Average Response Time
```promql
rate(traefik_service_request_duration_seconds_sum[5m]) / rate(traefik_service_request_duration_seconds_count[5m])
```
Shows the average response time in seconds.

### Active Connections
```promql
traefik_entrypoint_open_connections
```
Shows the number of currently open connections.

### HTTP Status Codes
```promql
sum(rate(traefik_service_requests_total{code=~"2.."}[5m])) by (service)
```
Shows successful requests (2xx) rate.

```promql
sum(rate(traefik_service_requests_total{code=~"4.."}[5m])) by (service)
```
Shows client error requests (4xx) rate.

```promql
sum(rate(traefik_service_requests_total{code=~"5.."}[5m])) by (service)
```
Shows server error requests (5xx) rate.

## Combined Metrics

### Request Distribution
```promql
sum(rate(traefik_service_requests_total[5m])) by (service)
```
Shows the distribution of requests across all services.

### Error Rate Percentage
```promql
(sum(rate(traefik_service_requests_total{code=~"5.."}[5m])) by (service) / sum(rate(traefik_service_requests_total[5m])) by (service)) * 100
```
Shows the percentage of 5xx errors per service.

### Service Health
```promql
up
```
Shows which services are up (1) or down (0).

## Alerting Rules (for future use)

```yaml
groups:
- name: example
  rules:
  - alert: HighErrorRate
    expr: sum(rate(traefik_service_requests_total{code=~"5.."}[5m])) by (service) / sum(rate(traefik_service_requests_total[5m])) by (service) > 0.05
    for: 5m
    labels:
      severity: warning
    annotations:
      summary: High error rate on {{ $labels.service }}
      description: "Error rate is {{ $value }}"

  - alert: HighLatency
    expr: rate(traefik_service_request_duration_seconds_sum[5m]) / rate(traefik_service_request_duration_seconds_count[5m]) > 1
    for: 5m
    labels:
      severity: warning
    annotations:
      summary: High latency on {{ $labels.service }}
      description: "Latency is {{ $value }} seconds"
``` 