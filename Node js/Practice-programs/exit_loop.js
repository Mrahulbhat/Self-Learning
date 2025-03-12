const http =require('http')

const server = http.createServer((req,res)=>{
    console.log(req)
    process.exit(); //Stops event loop
})
const port = 4200;
server.listen(port,()=>{
    console.log("Server running on port "+port);
})

//Now server will terminate after it recieves first request