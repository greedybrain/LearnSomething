//! Custom
const adminRoutes = require('../app/routes/admin')
const shopRoutes = require('../app/routes/shop')

const errorController = require('../app/controllers/404')

module.exports = function(app) {
        app.use('/admin', adminRoutes)
        app.use(shopRoutes)
        app.use(errorController.throw404)
}

