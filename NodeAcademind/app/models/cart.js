//! Core Modules
const path = require('path');
const fs = require('fs');
const p = path.join(__dirname, '../../data', 'cart.json')

class Cart {
    static addProduct(id, productPrice) {
            //fetch the previous cart
            fs.readFile(p, (err, content) => {
                let cart = {
                        products: [],
                        totalPrice: 0
                }    
                if (!err) {
                        cart = JSON.parse(content)
                }
                // analyze the cart, find existing product
                const existingProductIndex = cart.products.findIndex(prod => prod.id === id)
                const existingProduct = cart.products[existingProductIndex]
                let updatedProduct;
                // add new product or increase quantity 
                if (existingProduct) {
                        updatedProduct = {...existingProduct}
                        updatedProduct.qty = updatedProduct.qty + 1
                        cart.products = [...cart.products]
                        cart.products[existingProductIndex] = updatedProduct
                } else {
                        updatedProduct = {id, qty: 1}
                        cart.products = [...cart.products, updatedProduct]
                }
                cart.totalPrice += productPrice
                fs.writeFile(p, JSON.stringify(cart), err => {
                        return err
                })
            })
    }        
}

module.exports = { Cart }