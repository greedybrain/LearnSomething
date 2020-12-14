//! Core Modules
//

//! Third Party Modules
const express = require('express')
const router = express.Router()

//! Custom Modules
const { initNewProduct, createProduct } = require('../controllers/products'); //! Controllers

//! Main Logic 
router.get('/add-product', (req=null, res) => initNewProduct(res))
router.post('/products', (req, res) => createProduct(req, res))

//! Exports
module.exports = router 