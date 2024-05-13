
exports.get404=(req,res,next) => {
    // res.status(404).send() // for 404 error page not found
    // res.sendFile(path.join(path,'../.','hacka','index.html')); 
    //res.sendFile(path.join(__dirname,'../.','hacka','index.html'));
    res.status(404).render('404',{pagetitle:"Error page"})
};