const express = require('express');
// this exports a function , so we import it

const app = express();

app.use('/',(req, res, next )=>{
    console.log('This always run'); // '/' is like basic that mathches with every url so normally it must be written at last other wise it gives respones to / users 
    next();    
});

app.use('/add-product',(req, res, next )=>{
    console.log('in another middle ware');
    res.send('product page');
    // we should not add next fun because the other also get executed even its '/'
});

app.use('/',(req, res, next )=>{
    console.log('in another middle ware');
    res.send('./hacka/index.html');
});
// const server = http.createServer (app);
 // replaced by app.listen
// server.listen(3000);

app.listen(3000);
