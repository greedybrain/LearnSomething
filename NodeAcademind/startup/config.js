//! Core
const path = require('path');

module.exports = function(app, express) {
        //! Middleware config
        app.use(express.json())
        app.use(express.urlencoded({ extended: true }))
        app.use(express.static(path.join(__dirname, 'public')))
}