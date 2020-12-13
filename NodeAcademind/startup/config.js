//! Core
const path = require('path');

module.exports = function(app, express) {
        //! Middleware config

        app.set('view engine', 'pug')
        app.set('views', 'views')

        app.use(express.json())
        app.use(express.urlencoded({ extended: true }))
        app.use(express.static(path.join(__dirname, '../', 'public')))
}