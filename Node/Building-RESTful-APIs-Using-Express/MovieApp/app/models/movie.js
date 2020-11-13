//! Custom
const { genreSchema } = require('../models/genre')

//! MODELS/CONTROLLERS/VALIDATIONS
const mongoose = require('mongoose');
const Joi = require('joi')

const movieSchema = new mongoose.Schema({
        title: {
                type: String,
                required: true,
                minlength: 5,
                maxlength: 100
        },
        genre: {
                type: genreSchema,
                required: true
        },
        numberInStock: {
                type: Number,
                required: true,
                min: 0,
                max: 255
        },
        dailyRentalRate: {
                type: Number,
                required: true,
                min: 0,
                max: 255
        }
})

const Movie = mongoose.model('Movie', movieSchema)

//! Validations
const validateMovie = movie => {
        const schema = Joi.object({
                title: Joi.string().min(5).max(100).required(),
                genreId: Joi.string().required(),
                numberInStock: Joi.number().required(),
                dailyRentalRate: Joi.number().required()
        })
        return schema.validate(movie)
}

module.exports = {
        Movie,
        validateMovie
}
