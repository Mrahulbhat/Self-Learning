const http = require('http');

const server = http.createServer((req, res) => {
    if (req.url === "/" || req.url === "/home") {
        res.writeHead(200, { "Content-Type": "text/html" });
        let data = `<html>
                        <head>
                            <title>Homepage</title>
                        </head>
                        <body>
                            <h1>Welcome to home page</h1>
                            <nav>
                                <ul>
                                    <li><a href="/">Home</a></li>
                                    <li><a href="/events">Events</a></li>
                                    <li><a href="/about">About</a></li>
                                    <li><a href="/contact">Contact</a></li>
                                </ul>
                            </nav>
                        </body>
                    </html>`;
        res.end(data);
    }
    else if (req.url === "/events") {
        res.writeHead(200, { "Content-Type": "text/html" });
        let data = "<html><head><title>Events</title></head><body><h1>Upcoming Events</h1><a href='/'>Go Back</a></body></html>";
        res.end(data);
    } else {
        res.writeHead(404, { "Content-Type": "text/html" });
        res.end("<h1>404 Not Found</h1>");
    }
});

const port = 3000;
server.listen(port, () => {
    console.log(`Server running at Port ${port}`);
})