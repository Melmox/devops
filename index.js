const http = require('http');

const PORT = 80;

http.createServer((req, res) => {
  
  switch (req.url) {
    case '/':
      res.writeHead(200);
      res.end('<h1>Hello</h1>');
      break;
    case '/homepage':
      res.writeHead(200);
      res.end('<h1>Hello, you used another route</h1>');
      break;
    default:
      res.writeHead(404);
      res.end('<h1>This page does not exist</h1>');
      break;
  }
}).listen(PORT);