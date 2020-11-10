//! Custom
const { 
        getCustomers,
        getCustomer, 
        createCustomer, 
        updateCustomer, 
        deleteCustomer 
} = require('../controllers/customersController');

//! Packages
const express = require('express');
const customersRouter = express.Router()

//! Get all genres
customersRouter.get('/', async (req, res) => await getCustomers(res))
customersRouter.get('/:id', async (req, res) => await getCustomer(req, res))
customersRouter.post('/', async (req, res) => await createCustomer(req, res))
customersRouter.put('/:id', async (req, res) => await updateCustomer(req, res))
customersRouter.delete('/:id', async (req, res) => await deleteCustomer(req, res))

//! Export router to use in index.js file 
module.exports = customersRouter
        
