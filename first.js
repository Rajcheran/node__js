const express = require('express');
const path = require('path');
//const routedir = require('../util/path');
// mine files below
const adminData = require('./routes/admin');
const shoproute = require('./routes/shop');

const bodyparser =require('body-parser'); 
const app = express();

app.set('view engine','pug');
app.set('views','views');

app.use(bodyparser.urlencoded({extended: false}));
app.use(express.static(path.join(__dirname,'./','style')));// this must be used to apply css on html file


app.use('/admin',adminData.router); // all urls start with /admin enter this use it is a filter

app.use(shoproute);


app.use((req,res,next) => {
    // res.status(404).send() // for 404 error page not found
    // res.sendFile(path.join(path,'../.','hacka','index.html')); 
    //res.sendFile(path.join(__dirname,'../.','hacka','index.html'));
    res.render('404');
});

app.listen(3000);
