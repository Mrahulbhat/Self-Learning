const http = require('http');

const server = http.createServer((req, res) => {
    console.log("REQUEST URL: ", req.url);
    console.log("Request Method: ", req.method);
    console.log("Request headers: ", req.headers)
    process.exit(); //Stops event loop
})
const port = 4200;
server.listen(port, () => {
    console.log("Server running on port " + port);
})
