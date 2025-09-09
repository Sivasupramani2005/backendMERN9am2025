// Import http module
import http from "http";

// Create a server
const server = http.createServer((req, res) => {
  // Set response header
  res.writeHead(200, { "Content-Type": "text/plain" });

  // Send a response
  res.end("Hello, World! This is my first ESM Node.js server.");
});

// Start listening on port 3000
server.listen(3000, () => {
  console.log("✅ Server running at http://localhost:3000");
});
