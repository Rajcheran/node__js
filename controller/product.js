const products = [];
exports.products = products;

exports.getaddproduvt=(req, res, next )=>{ 
    // res.sendFile(path.join(__dirname,'..','views','add_product.html'));
    res.render('add_product',{pagetitle:'Add Product',path:"admin_page"});
 };

 exports.postaddproduct=(req, res, next )=>{ 
    // console.log(req.body); 
    products.push({title:req.body.title});
    //console.log(products);
     res.redirect('/');
 }; 
 exports.getproducts=(req, res, next )=>{
    // console.log(admindata.products);
    // res.sendFile(path.join(__dirname,'..','views','shop.html'));
    res.render('shop',{prods: products, pagetitle:'shop'});
};