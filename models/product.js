const fs = require('fs');
const path = require('path');
const rootDir = require('../utils/path');

const p = path.join(rootDir,'data','products.json');

const getProductsFromFile = (cb)=>{
    fs.readFile(p,(err,fileContent)=>{
        if(err){
            return cb([]);
        }
        cb(JSON.parse(fileContent));
    });
}

module.exports = class Product {
    constructor(title, price, desc){
        this.title = title;
        this.price = price;
        this.desc = desc;
    }

    save(){
        getProductsFromFile((products)=>{
            products.push(this);
            // Writing the file back from the array
            fs.writeFile(p, JSON.stringify(products),(err)=>{
                console.log(err);
            });
        });
    }

    static fetchAll(cb){
        getProductsFromFile(cb);
    }
}