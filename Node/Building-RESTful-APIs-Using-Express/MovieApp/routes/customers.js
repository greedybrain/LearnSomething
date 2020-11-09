//! Custom
const { 
        getCustomers,
        getCustomer, 
        createCustomer, 
        updateCustomer, 
        deleteCustomer 
} = require('../models/customer');

//! Packages
const express = require('express');
const customersRouter = express.Router()

//! get all genres
customersRouter.get('/', async (req, res) => getCustomers(res))
customersRouter.get('/:id', async (req, res) => getCustomer(req, res))
customersRouter.post('/', async (req, res) => createCustomer(req, res))
customersRouter.put('/:id', async (req, res) => updateCustomer(req, res))
customersRouter.delete('/:id', async (req, res) => deleteCustomer(req, res))

//! Export router to use in index.js file 
module.exports = customersRouter
        