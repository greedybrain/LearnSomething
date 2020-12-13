//! Core Modules
const path = require('path');

//! Third Party Modules
const express = require('express');
const router = express.Router()

const adminRoutes = require('../routes/admin')

router.get('/', (req, res, next) => {
        const products = adminRoutes.products
        res.render('shop', { products, title: "Shop" })

})

module.exports = {
        router
}