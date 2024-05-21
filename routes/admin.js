const path = require('path');
const express = require('express');

const admincontroller = require('../controller/admin') ; 
const router = express.Router();



// /admin/add-product => GET
router.get('/add-product',admincontroller.getaddproduvt);
// '/admin/add-product' since we adde filter to seperate routes more specifically so action in form changened

// /admin/add-product => POST
router.post('/add-product',admincontroller.postaddproduct);
router.get('/products',admincontroller.getproducts);



//module.exports = router;
exports.router = router;
