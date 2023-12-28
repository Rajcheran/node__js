const path = require('path');
const express = require('express');
const admindata = require('./admin')

const routes = express.Router();

routes.get('/',(req, res, next )=>{
    // console.log(admindata.products);
    // res.sendFile(path.join(__dirname,'..','views','shop.html'));
    const products = admindata.products;
    res.render('shop',{prods: products, doctitle:'shop'});
});

module.exports = routes;