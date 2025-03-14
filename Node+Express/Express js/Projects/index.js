const express = require('express');

const app = express();

app.get('/',(req,res)=>{
    res.setHeader("Content-Type","text/html");
    res.write(`
        <html>
            <head>
                <title>HomePage</title>
                <style>
                    body{
                        background-color:black;
                        color:white;
                    }
                    h1{
                        text-align:center;
                    }
                    a{
                        color:white;
                        text-decoration:none;
                    }
                </style>
            </head>
            <body>
                <h1>Welcome to Aakrithi 2025</h1>
                <ul>
                    <li><a href="/events">Events</a></li>
                    <li><a href="/register">Register</a></li>
                    <li><a href="/contact">Contact</a></li>
                </ul>        
            </body>
        </html>`
    );
    res.end();
});

app.get('/home',(req,res)=>{
    res.setHeader("Content-Type","text/html");
    res.write(`
        <html>
            <head>
                <title>HomePage</title>
                <style>
                    body{
                        background-color:black;
                        color:white;
                    }
                    h1{
                        text-align:center;
                    }
                    a{
                        color:white;
                        text-decoration:none;
                    }
                </style>
            </head>
            <body>
                <h1>Welcome to Aakrithi 2025</h1>
                <ul>
                    <li><a href="/events">Events</a></li>
                    <li><a href="/register">Register</a></li>
                    <li><a href="/contact">Contact</a></li>
                </ul>        
            </body>
        </html>`
    );
    res.end();
});

app.get('/events',(req,res)=>{
    res.setHeader("Content-Type","text/html");
    res.write(`
        <html>
            <head>
                <title>Events</title>
                <style>
                    body{
                        background-color:black;
                        color:white;
                    }
                    h1{
                        text-align:center;
                    }
                    a{
                        color:white;
                        text-decoration:none;
                    }
                </style>
            </head>
            <body>
                <h1>Welcome to Events 2025</h1>
                <ul>
                    <li><a href="/home">Return to home</a></li>
                </ul>        
            </body>
        </html>`
    );
    res.end();
});

app.get('/register',(req,res)=>{
    res.setHeader("Content-Type","text/html");
    res.write(`
        <html>
            <head>
                <title>Registration Page</title>
                <style>
                    body{
                        background-color:black;
                        color:white;
                    }
                    h1{
                        text-align:center;
                    }
                    a{
                        color:white;
                        text-decoration:none;
                    }
                </style>
            </head>
            <body>
                <h1>Welcome to Registration Page</h1>
                <ul>
                    <li><a href="/home">Return to home</a></li>
                </ul>        
            </body>
        </html>`
    );
    res.end();
});

app.get('/contact',(req,res)=>{
    res.setHeader("Content-Type","text/html");
    res.write(`
        <html>
            <head>
                <title>Events</title>
                <style>
                    body{
                        background-color:black;
                        color:white;
                    }
                    h1{
                        text-align:center;
                    }
                    a{
                        color:white;
                        text-decoration:none;
                    }
                </style>
            </head>
            <body>
                <h1>Welcome to Contact page</h1>
                <ul>
                    <li><a href="/home">Return to home</a></li>
                </ul>        
            </body>
        </html>`
    );
    res.end();
});

const port = 3000;

app.listen(port, () =>{
    console.log("Server running on port ",port);
})