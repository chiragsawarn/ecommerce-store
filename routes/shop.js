const express = require('express');
const router = express.Router();
const {products} = require('./admin');

router.get('/',(req,res,next)=>{
    res.render('shop',{docTitle:'Shop', products:products, path:'/'});
});

module.exports = router;