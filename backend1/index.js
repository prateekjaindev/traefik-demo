const http = require('http');
const client = require('prom-client');

// Create a Registry to register metrics
const register = new client.Registry();

// Add default metrics (CPU, memory, etc.)
client.collectDefaultMetrics({
  register,
  prefix: 'backend1_'
});

// Create a custom counter for requests
const requestCounter = new client.Counter({
  name: 'backend1_requests_total',
  help: 'Total number of requests to backend1',
  labelNames: ['path']
});

// Register the custom counter
register.registerMetric(requestCounter);

const server = http.createServer(async (req, res) => {
  // Increment the request counter
  requestCounter.inc({ path: req.url });

  // Handle metrics endpoint
  if (req.url === '/metrics') {
    res.setHeader('Content-Type', register.contentType);
    res.end(await register.metrics());
    return;
  }

  res.writeHead(200, { 'Content-Type': 'application/json' });
  res.end(JSON.stringify({
    service: 'Backend 1',
    message: 'This is the first backend service',
    path: req.url
  }));
});

server.listen(3000, () => {
  console.log('Backend 1 running on port 3000');
}); 