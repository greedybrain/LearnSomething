//! Core Modules
const fs = require('fs');
const path = require('path');

class Product {
        constructor(title) {
                this.title = title
        }

        save() {
                const thisPath = path.join(__dirname, '../../data/products.json')

                fs.readFile(thisPath, (err, content) => {
                        let products = []
                        if (!err) products = JSON.parse(content)
                        
                        products.push(this)
        
                        fs.writeFile(thisPath, JSON.stringify(products), err => console.log(err))
                })

        }

        static getProductsFromFile(cb) {
                const thisPath = path.join(__dirname, '../../data/products.json')
                return fs.readFile(thisPath, (err, content) => {
                        if (!err) return cb(JSON.parse(content))
                        return cb([])
                })
        }

        static fetchAll(cb) {
                this.getProductsFromFile(cb)
        }
}

module.exports = { Product }