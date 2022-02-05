const express = require('express');
const router = express.Router();
const path = require('path');
const rootDir = require('../utils/path');
// const products = [];

router.get('/add-product',(req,res,next)=>{
    console.log("Inside Add Product Form!");
    res.sendFile(path.join(rootDir,'views','add-product.html'));
})

router.post('/add-product',(req,res,next)=>{
    // products.push({title:req.body.title});
    console.log(JSON.parse(JSON.stringify(req.body)));
    res.redirect('/');
});

module.exports = router;
// exports.products = products;