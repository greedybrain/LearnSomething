//! Third Party Modules
const express = require('express')
const router = express.Router()

//! Custom Modules
const adminsController = require('../controllers/admin'); //! Controllers

//! Main Logic 
router.get('/add-product', adminsController.initNewProduct)
router.get('/products', adminsController.getProducts)
router.post('/products', adminsController.createProduct)

//! Exports
module.exports = router 