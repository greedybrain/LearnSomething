//! Controller actions (Helper functions)
const { Customer, validateCustomer } = require('../models/customer')

const getCustomers = async res => {
        const customers = await Customer.find().sort('name')

        res.send(customers)
}

const getCustomer = async (req, res)=> {
        const customer = await Customer.findById(req.params.id) 
        if (!customer) return res.status(404).send("Customer does not exist")

        res.send(customer)
}

const createCustomer = async (req, res) => {
        const { error } = validateCustomer(req.body)
        if (error) return res.status(400).send(error.message)

        const newCustomer = new Customer({
                name: req.body.name,
                isGold: req.body.isGold,
                phone: req.body.phone
        })
        try {
                customer = await newCustomer.save()
                res.send(customer)
        } catch (exc) {
                for (field in exc.errors) {
                        console.error(exc.errors[field].message)
                }
        }
}

const updateCustomer = async (req, res) => {
        const { error } = validateCustomer(req.body)
        if (error) return res.status(400).send(error.message)

        const customer = await Customer.findByIdAndUpdate(
                req.params.id,
                {
                        name: req.body.name,
                        isGold: req.body.isGold,
                        phone: req.body.phone
                },
                { new: true }
        )
        if (!customer) return res.status(404).send("Customer does not exist")

        res.send(customer)
}

const deleteCustomer = async (req, res) => {
        const customer = await Customer.findByIdAndDelete(req.params.id)
        if (!customer) return res.status(404).send("Customer does not exist")

        res.send(customer)
}

//! Exports
module.exports = {
        getCustomer,
        getCustomers,
        createCustomer,
        updateCustomer,
        deleteCustomer,
}