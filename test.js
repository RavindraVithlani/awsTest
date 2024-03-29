const http = require('http');

// Create a server object
const server = http.createServer((req, res) => {
  // Set the response HTTP header with HTTP status and Content type
  res.writeHead(200, {'Content-Type': 'text/plain'});
  
  // Send the response body as "Hello, World!"
  res.end('Hello\n');
});

// Define the port to listen on
const port = 3000;

// Make the server listen on port 3000
server.listen(port, () => {
  console.log(`Server running at http://localhost:${port}/`);
});
