//! Core Modules
const path = require('path');

//! NPM Modules
const express = require('express');
const chalk = require('chalk');

//! Custom Vars
const app = express()
const log = console.log
const success = chalk.greenBright.bold.inverse
const error = chalk.redBright.bold.inverse
const publicDirPath = path.join(__dirname, '../public')
//? =======================================

app.use(express.static(publicDirPath))
app.set('view engine', 'hbs');


// app.get('/', (req, res) => res.send('Home page'))

// app.get('/help', (req, res) => res.sendFile('help.html'))

// app.get('/about', (req, res) => res.sendFile('about.html'))

app.get('/weather', (req, res) => res.send("<h1>Weather page</h1>"))

//! Listening
app.listen(3000, err => {
        if (err) return log(error(err))
        log(success("Server is up on port 3000"))
})