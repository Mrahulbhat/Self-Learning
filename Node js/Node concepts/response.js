const http = require('http');

const server = http.createServer((req,res)=>{
    console.log(req.url,req.headers,req.method);
    res.setHeader('Content-Type','text/html');
    res.write('<html>');
    res.write('<body>Welcome Rahul</body>');
    res.write('</html>');
    setTimeout(() => {
        process.exit();
    }, 3000);
    
    
})

//output will be a webpage displaying Welcome html page with text Welcome rahul

const port = 3000; 
server.listen(port, ()=>{
    console.log("Connection established on port: ",port);
});