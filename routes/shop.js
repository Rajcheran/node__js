const path = require('path');
const express = require('express');
const admindata = require('./admin')

const routes = express();

routes.get('/',(req, res, next )=>{
    console.log(admindata.products);
    res.sendFile(path.join(__dirname,'..','views','shop.html'));
});

module.exports = routes;