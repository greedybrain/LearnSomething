const startupDebugger = require('debug')('app:startup')
const dbDebugger = require('debug')('app:db')
const config = require('config')
const mongoose = require('mongoose');
const express = require('express');
const app = express()

//! connect to database 
const connectionString = config.get('connection_string')
startupDebugger('Lets gooo')
mongoose.connect(connectionString, { useNewUrlParser: true, useUnifiedTopology: true })
        .then(dbDebugger('Connected to the database...'))