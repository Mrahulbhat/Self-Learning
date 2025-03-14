const http = require('http');

// http.createServer((req,res) =>{
//     console.log(req);
// })

 // Now if i run this it opens and closes coz its not listening to you.

 const server = http.createServer((req,res)=>{
    console.log(req);
 });

 const port = 3000;

 server.listen(port,()=>{
    console.log('Server running on port: '+ port);
 });

//server established.