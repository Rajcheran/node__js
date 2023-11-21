const http = require('http');
// we use express js from now

const express = require('express');
// this exports a function , so we import it

const app = express();

app.use((req, res, next )=>{
    console.log('in middle ware');
    next();//same as parameter // this allows to exit from one middle ware to another middelware
    // without giving response to website
});

app.use((req, res, next )=>{
    console.log('in another middle ware');
    // we don,t need to set header as node because express does it for us
    res.send('./hacka/index.html');
});

const server = http.createServer (app);
 
server.listen(3000);


// npm install --save express to get express for our project it will be added as dependencies tour package.json file