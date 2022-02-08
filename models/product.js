const fs = require('fs');
const path = require('path');
const rootDir = require('../utils/path');

module.exports = class Product {
    constructor(title, price, desc){
        this.title = title;
        this.price = price;
        this.desc = desc;
    }

    save(){
        const p = path.join(rootDir,'data','products.json');
        fs.readFile(p,(err,fileContent)=>{
            let products = [];
            if(!err){
                // Collecting file contents into an array
                products = JSON.parse(fileContent);
            }
            // Push our newly created object into the array
            products.push(this);
            // Writing the file back from the array
            fs.writeFile(p, JSON.stringify(products),(err)=>{
                console.log(err);
            });
        });
    }

    static fetchAll(cb){
        const p = path.join(rootDir,'data','products.json');
        fs.readFile(p,(err,fileContent)=>{
            if(err){
                cb([]);
            }
            cb(JSON.parse(fileContent));
        });
    }
}