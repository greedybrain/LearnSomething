//! Custom Modules 
const { Product } = require('../models/product')

//! Main Logic
exports.getProducts = (req, res) => {
        Product.fetchAll((products) => {
                return res.render('admin/products', { products, pageTitle: 'Admin Products', path: '/admin/products' })
        })
}

exports.initNewProduct = (req, res) => {
        return res.render('admin/add-product', { pageTitle: "Add Product", path: '/admin/add-product' })
}

exports.createProduct = (req, res) => {
        const { title, image, price, description } = req.body
        const product = new Product(title, image, description, price)
        product.save()
        return res.redirect('/shop')
}
