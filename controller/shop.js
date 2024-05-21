const products = require('../models/products');
const Product = require('../models/products');
const path = require('../views/util/path');

 exports.getproducts=(req, res, next )=>{
    // console.log(admindata.products);
    Product.fetchall(products=>{
    res.render('shop/product-list',{prods: products, pagetitle:'All products',path:'/products'});

    });
    // res.sendFile(path.join(__dirname,'..','views','shop.html'));
};

exports.getIndex=(req,res)=>{
    Product.fetchall(products=>{
        res.render('shop/index',{prods: products, pagetitle:'shop',path:'/index'});
    
        })
};

exports.getcart=(req,res)=>{
    Product.fetchall(products=>{
        res.render('shop/cart',{prods: products, pagetitle:'cart',path:'/cart'});
    
        });
}

exports.getchecklist=(req,res)=>{
    Product.fetchall(products=>{
        res.render('shop/product-list',{prods: products, pagetitle:'shop',path:'/products'});
    
        });
}

exports.getorders=(req,res)=>{
    Product.fetchall(products=>{
        res.render('shop/orders',{prods: products, pagetitle:'order',path:'/orders'});
    
        });
}