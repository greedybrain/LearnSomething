//! NPM Modules
const validator = require('validator');
const chalk = require('chalk');

//! Custom Modules/Helper Vars
const getNotes = require('./notes')
//==============================
const error = chalk.bold.red.inverse
const success = chalk.bold.green.inverse
const log = console.log

// 
const message = getNotes()
console.log(message)

// console.log(validator.isEmail('willis@gmail.com'))
if (validator.isURL('https://google.co')) log(success("Valid url"))
else log(error("Please check URL"))


// episode 17 heroes