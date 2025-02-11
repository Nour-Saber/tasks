let http = require("http");

let server = http.createServer((req, res) => {
  res.end("Hello world!");
});
let PORT = 3001;

server.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}/`);
});

