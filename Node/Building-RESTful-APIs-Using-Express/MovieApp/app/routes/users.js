//! Custom
const { 
        getUsers,
        getUser,
        createUser,
        // updateUser,
        // deleteUser
} = require('../controllers/usersController');

//! Packages
const express = require('express');
const usersRouter = express.Router()

//! Get all genres
usersRouter.get('/', async (req, res) => await getUsers(res))
usersRouter.get('/:id', async (req, res) => await getUser(req, res))
usersRouter.post('/', async (req, res) => await createUser(req, res))
// usersRouter.put('/:id', async (req, res) => await updateUser(req, res))
// usersRouter.delete('/:id', async (req, res) => await deleteUser(req, res))

//! Export router to use in index.js file 
module.exports = usersRouter
        
