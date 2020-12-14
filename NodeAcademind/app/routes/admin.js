//! Core Modules
//

//! Third Party Modules
const express = require('express')
const router = express.Router()

const products = []

// router.get('/add-product', (req, res) => res.sendFile(path.join(__dirname, '../', 'views', 'add-product.html')))
router.get('/add-product', (req, res) => res.render('add-product', { title: "Add Product", path: '/admin/add-product' }))

router.post('/products', (req, res) => {
        products.push({ title: req.body.title })
        res.redirect('/')
})

module.exports = {
        products,
        router
}