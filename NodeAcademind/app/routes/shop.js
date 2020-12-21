//! Third Party Modules
const express = require('express');
const router = express.Router()

//! Cutsom Modules
const shopsController = require('../controllers/shops') //! Controllers

//! Main Logic
router.get('/shop', shopsController.getProducts)
router.get('/products', shopsController.getIndex)
router.get('/products/:productId', shopsController.getProduct)
router.get('/cart', shopsController.getCart)
router.post('/cart', shopsController.addProductToCart)
router.get('/orders', shopsController.getOrders)
router.get('/checkout', shopsController.getCheckout)

module.exports = router