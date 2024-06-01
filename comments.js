// Create Web Server 
// Create a web server that listens on port 3000 and serves the comments.html file

// Create a web server that listens on port 3000 and serves the comments.html file
const http = require('http');
const fs = require('fs');
const path = require('path');

http.createServer((req, res) => {
  res.writeHead(200, {
    'Content-Type': 'text/html'
  });

  fs.createReadStream(path.join(__dirname, 'comments.html')).pipe(res);
}).listen(3000);

console.log('Server is running at http://localhost:3000');