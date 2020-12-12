//! Node Specfic 

//! Third Party
const express = require('express')
const app = express()

//! Set ENV vars config
require('dotenv').config()

//! Middleware config
require('./startup/config')(express, app)

//! Routes config
require('./startup/routes')(app)

//! Listening...
require('./startup/listener')(app)