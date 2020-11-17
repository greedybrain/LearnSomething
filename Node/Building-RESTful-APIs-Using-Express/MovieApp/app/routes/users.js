//! Custom
const { ifAuthorized } = require('../../app/middleware/auth')
const { 
        getCurrentUser,
        getUser,
        createUser,
} = require('../controllers/usersController');

//! Packages
const express = require('express');
const usersRouter = express.Router()

//! Get all genres
usersRouter.get('/me', ifAuthorized, async (req, res) => await getCurrentUser(req, res))
usersRouter.get('/:id', async (req, res) => await getUser(req, res))
usersRouter.post('/', async (req, res) => await createUser(req, res))

//! Export router to use in index.js file 
module.exports = usersRouter
        
