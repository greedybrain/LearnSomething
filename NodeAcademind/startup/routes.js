//! Owned
const adminRoutes = require('../routes/admin')
const shopRoutes = require('../routes/shop')

module.exports = function(app) {
        app.use('/admin', adminRoutes)
        app.use(shopRoutes)
        app.use((req, res) => {
                res.status(404).send("<h1>Page not found</h1>")
        })
}
