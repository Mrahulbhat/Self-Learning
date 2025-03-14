const express = require('express');
const app = express();

app.use((req, res, next) => {
    console.log("I am first middleware", "\nMy url: ", req.url, "\nMy req method: ", req.method);
    res.write("<h1>Welcome</h1>");
    next();
});

app.use((req, res, next) => {
    console.log("I am second middleware", "\nMy url: ", req.url, "\nMy req method: ", req.method);
    res.write("<p>Welcome to Rahuls coding classes</p>");
    res.end();
});

const port = 3000;

app.listen(port, () => {
    console.log(`Server established successfully at port : ${port}`);
});
