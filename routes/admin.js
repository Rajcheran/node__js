const path = require('path');
const express = require('express');

const router = express.Router();

const products = [];

// /admin/add-product => GET
router.get('/add-product',(req, res, next )=>{ 
    res.sendFile(path.join(__dirname,'..','views','add_product.html'));
});
// '/admin/add-product' since we adde filter to seperate routes more specifically so action in form changened

// /admin/add-product => POST
router.post('/add-product',(req, res, next )=>{ 
   // console.log(req.body);
   //products.push({title:req.body}); this will give all data in form of a directory
   products.push({title:req.body.title});// this gets specific data from req
   /// imp /// since this products variable is local to server, even if other user type url in other machine this data remain same for all since server is still running continuosly tis is not good this may alter their page due to this data maybe an email entrered in textbox filled to other user also so we must use other method
   //console.log(products);
    res.redirect('/');
});

//module.exports = router;
exports.router = router;
exports.products = products;