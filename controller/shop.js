const products = require('../models/products');
const Product = require('../models/products');
const cart = require('../models/cart');
const path = require('../util/path');
const car = require('../models/cart');

 exports.getproducts=(req, res, next )=>{
    // console.log(admindata.products);
    Product.fetchall(products=>{
    res.render('shop/product-list',{prods: products, pagetitle:'All products',path:'/products'});

    });
    // res.sendFile(path.join(__dirname,'..','views','shop.html'));
};
exports.getproduct=(req, res, next )=>{
    const prodid=req.params.productid
    Product.findbyid(prodid,product=>{
        //console.log(product)
        res.render('shop/product-detail',{prod:product,pagetitle:'details',path:'/products'})
    })
    
};

exports.getIndex=(req,res)=>{
    Product.fetchall(products=>{
        res.render('shop/index',{prods: products, pagetitle:'shop',path:'/index'});
    
        })
};

exports.getcart=(req,res)=>{
    car.getcart(cart=>{
        Product.fetchall(products=>{
            const cartproducts=[]
            for (p of products){
                const cartproductdata=cart.products.find(prod=>prod.id===p.id)
                console.log(cartproductdata)
                if(cartproductdata){
                    cartproducts.push({productdata:p,qty:cartproductdata.qty})
                }
            }
            res.render('shop/cart',{prods: cartproducts, pagetitle:'cart',path:'/cart'});
        })
        
    })
        
        
}
exports.postcart=(req,res)=>{
    const prodid=req.body.productid
    Product.findbyid(prodid,product=>{
        car.addproduct(prodid,product.price)
    })
    res.redirect('/cart')
}

exports.postcartdeleteproduct=(req,res)=>{
    const prodid=req.body.productid
    Product.findbyid(prodid,product=>{
        car.deleteproduct(prodid,product.price)
        res.redirect('/cart')
    })
   
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

