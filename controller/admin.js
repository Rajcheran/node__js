const Product = require('../models/products')

exports.getaddproduvt=(req, res, next )=>{ 
    // res.sendFile(path.join(__dirname,'..','views','add_product.html'));
    res.render('admin/add_product',{pagetitle:'Add Product',path:"admin_page",path:'/admin/add_product'});
 };

 exports.postaddproduct=(req, res, next )=>{ 
    // console.log(req.body); 
    const tittle=req.body.title
    const price=req.body.price
    const discription=req.body.discription
    const imageurl=req.body.imageurl

    const product = new  Product(tittle,price,discription,imageurl);
    product.save();
    //console.log(products);
     res.redirect('/');
 }; 

 exports.getproducts = (req,res)=>{
    Product.fetchall(products=>{
        res.render('admin/products',{prods: products, pagetitle:'admin products',path:'/admin/products'});
    
        });
 }