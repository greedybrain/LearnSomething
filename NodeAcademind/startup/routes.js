//! Owned
const adminRoutes = require('../routes/admin')
const shopRoutes = require('../routes/shop')

module.exports = function(app) {
        app.use(adminRoutes)
        app.use(shopRoutes)
}
