//! Core Modules
//

//! Third Party Modules
const express = require('express');
const router = express.Router()

//! Cutsom Modules
const { getProducts } = require('../controllers/products') //! Controllers

//! Main Logic
router.get('/', (req=null, res) => getProducts(res))

module.exports = router