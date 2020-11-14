//! IMPORTS
//! Custom
const auth = require('./app/routes/auths')
const users = require('./app/routes/users')
const movies = require('./app/routes/movies')
const genres = require('./app/routes/genres')
const customers = require('./app/routes/customers')

//! Packages
const config = require('config');
const mongoose = require('mongoose');
const express = require('express');
const app = express();

if (!config.get('jwtPrivateKey')) {
        console.log("FATAL ERROR: jwtPrivateKey is not defined.")
        process.exit(1)
} 

//! Connecting to database
const connectionString = config.get('connection_string')
mongoose.connect(connectionString,
        {
                useFindAndModify: true, 
                useUnifiedTopology: true, 
                useFindAndModify: false,
                useNewUrlParser: true,
                useCreateIndex: true
        }
)
        .then(() => console.log("Connected to the database..."))
        .catch(err => console.error(err))
//! adding middleware
app.use(express.json()) 
app.use('/api/genres', genres)
app.use('/api/customers', customers)
app.use('/api/movies', movies)
app.use('/api/users', users)
app.use('/api/auth', auth)

//! LISTENING
const PORT = process.env.PORT || 3000
app.listen(PORT, () => console.log(`Listening on port ${PORT}...`))