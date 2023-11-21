const express = require('express');
// this exports a function , so we import it
const adminroute = require('./routes/admin');
const shoproute = require('./routes/shop');

const bodyparser =require('body-parser'); // npm install --save body-parser 
const app = express();

app.use(bodyparser.urlencoded({extended: false}));// it parser the body to get text for other parseing we need other methods 


app.use(adminroute); // this works for both 'GET' and 'POST' request made

//app.get() for get request
app.use(shoproute);



app.listen(3000);
