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

//! Controller actions (Helper functions)
const getGenres = async res => {
        const genres = await Genre.find().sort('name')

        res.send(genres)
}

const getGenre = async (req, res)=> {
        const genre = await Genre.findById(req.params.id) 
        if (!genre) return res.status(404).send("Genre does not exist")

        res.send(genre)
}

const createGenre = async (req, res) => {
        const { error } = validateGenre(req.body)
        if (error) return res.status(400).send(error.message)

        const newGenre = new Genre({ name: req.body.name })
        try {
                genre = await newGenre.save()
                res.send(genre)
        } catch (exc) {
                for (field in exc.errors) {
                        console.error(exc.errors[field].message)
                }
        }
}

const updateGenre = async (req, res) => {
        const { error } = validateGenre(req.body)
        if (error) return res.status(400).send(error.message)

        const genre = await Genre.findByIdAndUpdate(req.params.id, { name: req.body.name }, { new: true })
        if (!genre) return res.status(404).send("Genre does not exist")

        res.send(genre)
}

const deleteGenre = async (req, res) => {
        const genre = await Genre.findByIdAndDelete(req.params.id)
        if (!genre) return res.status(404).send("Genre does not exist")

        res.send(genre)
}

//! Validations
const validateGenre = genre => {
        const schema = Joi.object({
                name: Joi.string().max(10).required()
        })
        return schema.validate(genre)
}

//! Exports
module.exports = {
        getGenres,
        getGenre,
        createGenre,
        updateGenre,
        deleteGenre,
}