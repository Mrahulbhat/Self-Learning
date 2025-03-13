const http = require('http');
const fs = require('fs');
const path = require('path');

const server = http.createServer((req, res) => {
    fs.readFile('html_res.html',(err,data)=>{
        if(err){
            console.log(err);
            res.writeHead(500,{'Content-Type':'text/plain'});
            res.end('Error: ',err);
            return;
        }
        res.writeHead(200,{'Content-Type':'text/html'});
        res.end(data);
    });

    setTimeout(() => {
        process.exit(0);
    }, 5000);    
})

const port = 3000;
server.listen(port, () => {
    console.log("Server established successfully at port: "+port);
});