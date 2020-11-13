//! Custom

//! MODELS/CONTROLLERS/VALIDATIONS
const mongoose = require('mongoose');
const Joi = require('joi')

const userSchema = new mongoose.Schema({
        name: {
                type: String,
                required: true,
                minlength: 3,
                maxlength: 100
        },
        email: {
                type: String,
                required: true,
                unique: true,
                minlength: 5,
                maxlength: 100
        },
        password: {
                type: String,
                required: true,
                min: 8,
                max: 1024
        },
})

const User = mongoose.model('User', userSchema)

//! Validations
const validateUser = user => {
        const schema = Joi.object({
                name: Joi.string().min(3).max(100).required(),
                email: Joi.string().min(5).max(100).required().email(),
                password: Joi.string().min(8).max(255).required(),
        })
        return schema.validate(user)
}

module.exports = {
        User,
        validateUser
}
