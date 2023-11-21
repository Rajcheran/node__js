const express = require('express');

const route = express();

route.get('/',(req, res, next )=>{
    res.send('./hacka/index.html');
});

module.exports = route;