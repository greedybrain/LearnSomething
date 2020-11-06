//! IMPORTS
//! Custom
const genres = require('./routes/genres')
//! Packages
const express = require('express');
const app = express();

//! adding middleware
app.use(express.json()) 
app.use('/api/genres', genres)

//! LISTENING
const PORT = process.env.PORT || 3000
app.listen(PORT, () => console.log(`Listening on port ${PORT}...`))