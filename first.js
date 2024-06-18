const express = require('express');
const path = require('path');
//const routedir = require('../util/path');
// mine files below

const bodyparser =require('body-parser'); 
const expressHbs = require('express-handlebars');
const app = express();

//app.engine('handlebars',expressHbs());
//app.set('view engine','pug');
//app.set('view engine','handlebars');
app.set('view engine','ejs');
app.set('views','views');

const adminRoutes = require('./routes/admin');
const shoproute = require('./routes/shop');

const errorcontroller= require('./controller/error')
const mongoconnect = require('./util/database');

app.use(bodyparser.urlencoded({extended: false}));
app.use(express.static(path.join(__dirname,'./','style')));// this must be used to apply css on html file


app.use('/admin',adminRoutes.router); // all urls start with /admin enter this use it is a filter

app.use(shoproute);


app.use(errorcontroller.get404);



mongoconnect((client)=>{
    console.log(client);
    app.listen(4000);
})