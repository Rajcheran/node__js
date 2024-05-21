const path = require('path');
const express = require('express');
const shopcontroller = require('../controller/shop')

const routes = express.Router();

routes.get('/',shopcontroller.getIndex);
routes.get('/products',shopcontroller.getproducts);
routes.get('/cart',shopcontroller.getcart);
routes.get('/checkout',shopcontroller.getchecklist);
routes.get('/orders',shopcontroller.getorders);


module.exports = routes;