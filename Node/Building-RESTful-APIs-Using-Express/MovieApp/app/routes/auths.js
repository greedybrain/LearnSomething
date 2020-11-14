const { createUser } = require('../controllers/authController')

//! Packages
const express = require('express');
const authRouter = express.Router()

//! Create login request
authRouter.post('/', async (req, res) => await createUser(req, res))

//! Export router to use in index.js file 
module.exports = authRouter