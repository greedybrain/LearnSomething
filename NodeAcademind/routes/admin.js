const express = require('express');
const router = express.Router()

router.get('/add-product', (req, res) => {
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