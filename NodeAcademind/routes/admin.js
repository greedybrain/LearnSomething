//! Core
const path = require('path');

//! Third Party Modules
const express = require('express')
const router = express.Router()

router.get('/home', (req, res, next) => {
        res.sendFile(path.join(__dirname, '../', 'views', 'index.html'))
})

router.get('/add-product', (req, res, next) => {
        res.send(
                `<form action="/products" method="POST">
                        <input type="text" name="product" placeholder="Product" />
                        <button type="submit">Add Product</button>
                </form>`
        )
})

router.post('/products', (req, res) => {
        console.log(req.body)
        res.redirect('/')
})

module.exports = router