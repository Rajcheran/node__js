const express = require('express');

const router = express.Router();

// /admin/add-product => GET
router.get('/add-product',(req, res, next )=>{ 
    res.send('<form action="/admin/add-product" method="POST"><input type="text" name="title"><button type="submit">add item</button></input></form>');
});
// '/admin/add-product' since we adde filter to seperate routes more specifically so action in form changened

// /admin/add-product => POST
router.post('/add-product',(req, res, next )=>{ 
    console.log(req.body);
    res.redirect('/');
});

module.exports = router;