const path = require('path');
const express = require('express');
const shopcontroller = require('../controller/shop')

const routes = express.Router();

routes.get('/',shopcontroller.getIndex);
routes.get('/products',shopcontroller.getproducts);
routes.get('/products/:productid',shopcontroller.getproduct)
routes.get('/cart',shopcontroller.getcart);
routes.post('/cart',shopcontroller.postcart)
routes.post('/cart-delete-item',shopcontroller.postcartdeleteproduct);
routes.get('/checkout',shopcontroller.getchecklist);
routes.get('/orders',shopcontroller.getorders);


module.exports = routes;