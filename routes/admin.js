const path = require('path');
const express = require('express');

const router = express.Router();

const products = [];

// /admin/add-product => GET
router.get('/add-product',(req, res, next )=>{ 
   // res.sendFile(path.join(__dirname,'..','views','add_product.html'));
   res.render('add_product',{pagetitle:'Add Product'});
});
// '/admin/add-product' since we adde filter to seperate routes more specifically so action in form changened

// /admin/add-product => POST
router.post('/add-product',(req, res, next )=>{ 
   // console.log(req.body); 
   products.push({title:req.body.title});
   //console.log(products);
    res.redirect('/');
});

//module.exports = router;
exports.router = router;
exports.products = products;