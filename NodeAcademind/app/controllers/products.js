//! Imports
//

//! Main Logic
const products = []

const getProducts = res => {
        return res.render('shop', { products, title: 'Shop', path: '/shop' })
}

const initNewProduct = res => {
        return res.render('add-product', { title: "Add Product", path: '/admin/add-product' })
}

const createProduct = (req, res) => {
        products.push({ title: req.body.title })
        return res.redirect('/')
}

//! Exports
module.exports = {
        getProducts,
        initNewProduct,
        createProduct
}