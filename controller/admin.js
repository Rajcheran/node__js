const Product = require('../models/products')

exports.getaddproduvt=(req, res, next )=>{ 
    // res.sendFile(path.join(__dirname,'..','views','add_product.html'));
    res.render('admin/edit-product',{pagetitle:'Add Product',path:"admin_page",path:'/admin/add_product',editing:false});
 };

 exports.postaddproduct=(req, res, next )=>{ 
    // console.log(req.body); 
    const tittle=req.body.title
    const price=req.body.price
    const discription=req.body.discription
    const imageurl=req.body.imageurl

    const product = new  Product(null,tittle,price,discription,imageurl);
    product.save();
    //console.log(products);
     res.redirect('/');
 };
 
 exports.geteditproduvt=(req, res, next )=>{ 
    const editmode = req.query.edit 
    const productid = req.params.productid
    if(!editmode){
    
    return  res.redirect('/')
    }
    Product.findbyid(productid,product=>{
        if(!product){
            res.redirect('/');
        }
        res.render('admin/edit-product',
        {pagetitle:'Add Product',path:"admin_page",path:'/admin/editproduct',editing:editmode,prod:product});

    })

 };

 exports.posteditproduct = (req,res)=>{
    const prodid=req.body.productid
    const updatedtitle=req.body.title
    const updatedprice= req.body.price
    const updatedimageurl= req.body.imageurl
    const updateddiscription= req.body.discription
    const updatedproduct = new Product(prodid,updatedtitle,updatedprice,updatedimageurl,updateddiscription)
    updatedproduct.save()
    res.redirect('/admin/products');
 }

 exports.getproducts = (req,res)=>{
    Product.fetchall(products=>{
        res.render('admin/products',{prods: products, pagetitle:'admin products',path:'/admin/products'});
    
        });
 }

 exports.postdeleteproduct=(req,res)=>{
    const prodid = req.body.productid
    Product.deletebyid(prodid)
    res.redirect('/admin/products')

 }