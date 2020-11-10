//! MODELS/CONTROLLERS/VALIDATIONS
const mongoose = require('mongoose');
const Joi = require('joi')

const Genre = mongoose.model('Genre', new mongoose.Schema({
        name: {
                type: String,
                required: true,
                minlength: 5,
                maxlength: 20
        }
}))

//! Validations
const validateGenre = genre => {
        const schema = Joi.object({
                name: Joi.string().max(10).required()
        })
        return schema.validate(genre)
}

module.exports = {
        Genre,
        validateGenre
}