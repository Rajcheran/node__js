const express = require('express');
// mine files below
const adminroute = require('./routes/admin');
const shoproute = require('./routes/shop');

const bodyparser =require('body-parser'); 
const app = express();

app.use(bodyparser.urlencoded({extended: false}));


app.use('/admin',adminroute); // all urls start with /admin enter this use it is a filter

app.use(shoproute);

app.use((req,res,next) => {
    res.status(404).send('<h1>page not found</h1>')
});

app.listen(3000);
