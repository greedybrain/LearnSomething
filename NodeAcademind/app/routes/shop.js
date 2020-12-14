//! Third Party Modules
const express = require('express');
const router = express.Router()

//! Cutsom Modules
const productsController = require('../controllers/products') //! Controllers

//! Main Logic
router.get('/', productsController.getProducts)

module.exports = router