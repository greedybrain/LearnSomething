//! Custom Modules 
const { Product } = require('../models/product')

//! Main Logic
exports.getProducts = (req, res) => {
        Product.fetchAll((products) => {
                return res.render('shop', { products, title: 'Shop', path: '/shop' })
        })
}

exports.initNewProduct = (req, res) => {
        return res.render('add-product', { title: "Add Product", path: '/admin/add-product' })
}

exports.createProduct = (req, res) => {
        const product = new Product(req.body.title)
        product.save()
        return res.redirect('/')
}
