//! MODELS/CONTROLLERS/VALIDATIONS
const mongoose = require('mongoose');
const Joi = require('joi')

const genreSchema = new mongoose.Schema({
        name: {
                type: String,
                required: true,
                minlength: 5,
                maxlength: 20
        }
})

const Genre = mongoose.model('Genre', genreSchema)

//! Validations
const validateGenre = genre => {
        const schema = Joi.object({
                name: Joi.string().max(10).required()
        })
        return schema.validate(genre)
}

module.exports = {
        genreSchema,
        Genre,
        validateGenre
}