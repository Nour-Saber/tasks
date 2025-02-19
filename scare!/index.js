 const http= require('http');
const fs= require('fs');

const server= http.createServer((req, res) => {
    res.end("hi");
})
const port=3000;

server.listen(port, () => {
    console.log(`Server is running on port ${port}`)
})
