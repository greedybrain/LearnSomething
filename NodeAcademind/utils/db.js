const mongoose = require('mongoose');

const user = process.env.DB_USER
const password = process.env.DB_PASSWORD
const CONNECTION_STRING = `mongodb+srv://${user}:${password}@node-tutorial.8fv5o.mongodb.net/test`

const dbConnect = () => {
        mongoose.connect(CONNECTION_STRING, { 
                useUnifiedTopology: true, useNewUrlParser: true 
        })
                .then(() => console.log("Connected to database"))
                .catch(err => console.log(err))
}

module.exports = dbConnect