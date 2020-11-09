//! IMPORTS
//! Custom
const genres = require('./routes/genres')
const customers = require('./routes/customers')
//! Packages
const config = require('config');
const dbDebugger = require('debug')('app:db');
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
                useNewUrlParser: true
        }
)
        .then(() => dbDebugger("Connected to the database..."))
        .catch(err => dbDebugger(err))

//! adding middleware
app.use(express.json()) 
app.use('/api/genres', genres)
app.use('/api/customers', customers)

//! LISTENING
const PORT = process.env.PORT || 3000
app.listen(PORT, () => console.log(`Listening on port ${PORT}...`))