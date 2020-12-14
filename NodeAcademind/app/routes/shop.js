//! Core Modules
//

//! Third Party Modules
const express = require('express');
const router = express.Router()

const adminRoutes = require('./admin')

router.get('/', (req, res, next) => {
        const products = adminRoutes.products
        res.render('shop', { products, title: "Shop", path: '/shop' })

})

module.exports = {
        router
}