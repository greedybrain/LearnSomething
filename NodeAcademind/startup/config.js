module.exports = function(express, app) {
        //! Middleware config
        app.use(express.json())
        app.use(express.urlencoded({ extended: true }))
}