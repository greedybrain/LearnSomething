//! Core Modules
const path = require('path');

//! Owned
const adminRoutes = require('../routes/admin')
const shopRoutes = require('../routes/shop')

module.exports = function(app) {
        app.use('/admin', adminRoutes.router)
        app.use(shopRoutes.router)
        app.use((req, res) => res.status(404).render('404', { title: "Page Not Found" }))
}
