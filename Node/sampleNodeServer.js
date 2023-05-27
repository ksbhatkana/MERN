const http = require('http');

const server = http.createServer((req, res) => {
    console.log('Incoming request');
    console.log(req.method, req.url);
    if(req.method === 'POST') {
        let body = '';
        req.on('end', () => {               //Called when all data is collected from req
            console.log(body);
            res.end('<h1>Got the POST request.</h1>');
        });

        req.on('data', (chunk) => {         //Since Node doesn't have req.body method and data is sent as piece of chunks instead of sending altogether, we collect it like this.
            body += chunk;
        });
    } else {
        res.setHeader('Content-Type', 'text/plain')
        res.end('<h1>GET request received</h1>');
    }
})

server.listen(5000);