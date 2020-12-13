const { PORT } = process.env

module.exports = function(app) {
        if (app.get('env') === 'development') {
                //! Listening...
                return app.listen(PORT, err => {
                        if (err) console.log(err)
                        console.log(`PORT=${ PORT }`)
                })
        }
        console.log("Check enviroment")
}