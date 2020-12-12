const { PORT } = process.env

//! Listening...
module.exports = function(app) {
        if (app.get('env') === 'development') {
                app.listen(PORT, err => {
                        if (err) console.log(err)
                        console.log(`PORT=${ PORT }`)
                })
        } else {
                console.log("Check environment")
        }
}