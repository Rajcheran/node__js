const path = require('path');
const express = require('express');
const getproduct = require('../controller/product')

const routes = express.Router();

routes.get('/',getproduct.getproducts);

module.exports = routes;