//! Third Party Modules
const express = require('express')
const router = express.Router()

//! Custom Modules
const productsController = require('../controllers/products'); //! Controllers

//! Main Logic 
router.get('/add-product', productsController.initNewProduct)
router.post('/products', productsController.createProduct)

//! Exports
module.exports = router 