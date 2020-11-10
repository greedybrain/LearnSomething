//! MODELS/CONTROLLERS/VALIDATIONS
const mongoose = require('mongoose');
const Joi = require('joi')

const Customer = mongoose.model('Customer', new mongoose.Schema({
        name: {
                type: String,
                required: true
        },
        isGold: {
                type: Boolean,
                default: false
        },
        phone: {
                type: String,
                required: true,
                minlength: 10,
                maxlength: 11
        }
}))

//! Validations
const validateCustomer = customer => {
        const schema = Joi.object({
                name: Joi.string().required(),
                isGold: Joi.boolean().required(),
                phone: Joi.string().min(10).max(11).required()
        })
        return schema.validate(customer)
}

module.exports = {
        Customer,
        validateCustomer
}