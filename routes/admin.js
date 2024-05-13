const path = require('path');
const express = require('express');

const productscontroller = require('../controller/product') ; 
const router = express.Router();



// /admin/add-product => GET
router.get('/add-product',productscontroller.getaddproduvt);
// '/admin/add-product' since we adde filter to seperate routes more specifically so action in form changened

// /admin/add-product => POST
router.post('/add-product',productscontroller.postaddproduct);

//module.exports = router;
exports.router = router;
