//! Core Modules
//

//! Owned
const adminRoutes = require('../app/routes/admin')
const shopRoutes = require('../app/routes/shop')

module.exports = function(app) {
        app.use('/admin', adminRoutes.router)
        app.use(shopRoutes.router)
        app.use((req, res) => res.status(404).render('404', { title: "Page Not Found" }))
}

