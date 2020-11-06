//! IMPORTS
//! custom 
const logger = require('../Tutorial/middleware/logger')
const courses = require('../Tutorial/routes/courses');
const home = require('../Tutorial/routes/home')
//! packages
const helmet = require('helmet');
const morgan = require('morgan')
const express = require('express');
const app = express();

//! adding middleware
app.use(express.json())
app.use(express.urlencoded({ extended: true }))
app.use(express.static('public')) 
app.use(helmet())
app.use('/api/courses', courses)
app.use('/', home)

if (app.get('env') === 'development') {
        app.use(morgan('tiny'))
} 

const PORT = process.env.PORT || 3000
app.listen(PORT, () => console.log(`Listening on port ${PORT}...`))

//! *** SET ENV VARIABLE => [export PORT=5000]