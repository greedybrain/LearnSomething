//! Core
//

//! Custom Modules 
const getPath  = require('../utils/getPath');

module.exports = function(app, express) {
        //! Middleware config

        //! Template engine setup
        app.set('view engine', 'pug')
        app.set('views', getPath('../app/views'))

        //! Enabling the parsing of POST data
        app.use(express.json())
        app.use(express.urlencoded({ extended: true }))

        //! Setting public folder as static
        app.use(express.static(getPath('../public')))
}