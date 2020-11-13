//! IMPORTS
//! Custom
const users = require('./app/routes/users')
const movies = require('./app/routes/movies')
const genres = require('./app/routes/genres')
const customers = require('./app/routes/customers')

//! Packages
const config = require('config');
const mongoose = require('mongoose');
const express = require('express');
const app = express();

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

//! LISTENING
const PORT = process.env.PORT || 3000
app.listen(PORT, () => console.log(`Listening on port ${PORT}...`))