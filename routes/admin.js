const express = require('express');
const router = express.Router();
const products = [];

router.get('/add-product',(req,res,next)=>{
    res.render('add-product',{docTitle:'Add Product', path:'/admin/add-product'});
})

router.post('/add-product',(req,res,next)=>{
    products.push({title:req.body.title, price:req.body.price, desc:req.body.desc});
    console.log(JSON.parse(JSON.stringify(req.body)));
    res.redirect('/');
});

exports.routes = router;
exports.products = products;