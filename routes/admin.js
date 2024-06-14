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

router.get('/edit-product/:productid',admincontroller.geteditproduvt)
router.post('/edit-product',admincontroller.posteditproduct)
router.post('/delete-product',admincontroller.postdeleteproduct)
//module.exports = router;
exports.router = router;
