const Product = require('../models/product');

// Controllers for admin.js
const getAddProduct = (req,res,next)=>{
    res.render('add-product',{docTitle:'Add Product', path:'/admin/add-product'});
}

const postAddProduct = (req,res,next)=>{
    const p1 = new Product(req.body.title, req.body.price, req.body.desc);
    // save() : pushes the obj in products array
    p1.save(); 
    console.log(JSON.parse(JSON.stringify(req.body)));
    res.redirect('/');
}

// Controllers for shop.js
const getShop = (req,res,next)=>{
    const products = Product.fetchAll();
    res.render('shop',{docTitle:'Shop', products:products, path:'/'});
}

exports.getAddProduct = getAddProduct;
exports.postAddProduct = postAddProduct;
exports.getShop = getShop;