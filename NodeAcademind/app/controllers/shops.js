//! Custom Modules 
const { Product } = require('../models/product')
const { Cart } = require('../models/cart')

//! Main Logic
exports.getProducts = (req, res) => {
        Product.fetchAll((products) => {
                return res.render('shop/product-list', { products, pageTitle: 'Shop', path: '/shop' })
        })
}

exports.getIndex = (req, res) => {
        Product.fetchAll((products) => {
                return res.render('shop/index', { products, pageTitle: 'All Products', path: '/products' })
        })
}

exports.getProduct = (req, res) => {
        const productId = req.params.productId
        Product.findById(productId, product => {
                return res.render('shop/product-details', { product, pageTitle: product.title, path: "/product/details" })
        })
}

exports.getCart = (req, res) => {
        return res.render('shop/cart', { pageTitle: 'Your Cart', path: '/cart' })
}

exports.addProductToCart = (req, res) => {
        const productId = req.body.productId
        Product.findById(productId, product => Cart.addProduct(product, product.price))
        return res.redirect('/cart')
}

exports.getOrders = (req, res) => {
        return res.render('shop/orders', { pageTitle: 'Your Orders', path: '/orders' })
}

exports.getCheckout = (req, res) => {
        return res.render('shop/checkout', { pageTitle: 'Checkout', path: '/checkout' })
}