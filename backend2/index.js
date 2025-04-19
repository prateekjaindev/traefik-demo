const http = require('http');

const server = http.createServer((req, res) => {
    res.writeHead(200, { 'Content-Type': 'application/json' });
    res.end(JSON.stringify({
        service: 'Backend 2',
        message: 'This is the second backend service',
        path: req.url
    }));
});

server.listen(3000, () => {
    console.log('Backend 2 running on port 3000');
}); 