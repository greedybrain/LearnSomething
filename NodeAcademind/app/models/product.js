//! Core Modules
const fs = require('fs');
const path = require('path');

class Product {
        constructor(title, imageUrl, description, price) {
                this.title = title
                this.imageUrl = imageUrl
                this.description = description
                this.price = price
        }

        save() {
                this.id = Math.random().toString()
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
                fs.readFile(thisPath, (err, content) => {
                        if (!err) return cb(JSON.parse(content))
                        return cb([])
                })
        }

        static fetchAll(cb) {
                this.getProductsFromFile(cb)
        }

        static findById(id, cb) {
                this.getProductsFromFile((products) => {
                        const product = products.find(prod => prod.id === id)
                        console.log(product)
                        return cb(product)
                })
        }
}

module.exports = { Product }