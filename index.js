// console.log("Hello World")
// const http = require('http');
// const hostname = '127.0.0.1';
// const port = 3000;
// const server = http.createServer((req, res) => {
//     res.statusCode = 200;
//     res.setHeader('Content-Type', 'text/plain');
//     res.end('Hello World!\n');
//   });
//   server.listen(port, hostname, () => {
//     console.log(`Server running at http://${hostname}:${port}/`);
//   });
//   const server1 = http.createServer((req, res) => {
//     res.statusCode = 200;
//     res.setHeader('Content-Type', 'text/html');
//     res.write('<h1 style="color: red">Hello World!</h1>');
//     res.write('<p>I wonder what else we can send...</p>');
//     res.end();
//   });
//   const http = require('http');
// const url = require('url');
const http = require('http');
const url = require('url');

const hostname = '127.0.0.1';
const port = 3000;

const server = http.createServer((req, res) => {
    const parsedUrl = url.parse(req.url, true);
    const path = parsedUrl.pathname;

    if (path === '/') {
        // Default route
        res.statusCode = 200;
        res.setHeader('Content-Type', 'text/plain');
        res.end('Hello World!\n');
    } else if (path === '/about') {
        // /about route
        res.statusCode = 200;
        res.setHeader('Content-Type', 'text/html');
        res.write('<h1>About Us</h1>');
        res.write('<p>Welcome to the about page!</p>');
        res.end();
    } else if (path === '/time') {
        // /time route
        res.statusCode = 200;
        res.setHeader('Content-Type', 'text/html');
        const currentTime = new Date().toLocaleTimeString();
        res.write('<h1>Current Time</h1>');
        res.write(`<p>The current time is: ${currentTime}</p>`);
        res.end();
    } else {
        // 404 Not Found
        res.statusCode = 404;
        res.setHeader('Content-Type', 'text/html');
        res.write('<h1>404 Not Found</h1>');
        res.write('<p>The page you are looking for does not exist.</p>');
        res.end();
    }
});

server.listen(port, hostname, () => {
    console.log(`Server running at http://${hostname}:${port}/`);
});
