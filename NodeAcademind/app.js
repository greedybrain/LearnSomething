//! Cutom Modules
const dbConnect = require('./utils/db')

//! Third Party Modules
const express = require('express')
const app = express()

//! Set ENV vars config
require('dotenv').config()

//! Middleware config
require('./startup/config')(app, express)

//! Routes config
require('./startup/routes')(app)

//! Listening...
dbConnect()
require('./startup/listener')(app)

