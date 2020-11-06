//! Packages
const Joi = require('joi')
const express = require('express');
const router = express.Router()

const genres = [
        {
                id: 1, genre: "Horror"
        },
        {
                id: 2, genre: "Action"
        },
        {
                id: 3, genre: "Comedy"
        },
]

//! get all genres
router.get('/', (req, res) => res.send(genres))
router.get('/:id', (req, res) => {
        const genre = genres.find(genre => genre.id == req.params.id)

        if (!genre) return res.status(404).send("Genre does not exist")

        res.send(genre)
})
router.post('/', (req, res) => {
        const { error } = validateGenre(req.body)
        if (error) return res.status(400).send(error.message)
        
        const genre = {
                id: genres.length + 1,
                genre: req.body.genre
        }
        genres.push(genre)
        res.send(genre)
})
router.put('/:id', (req, res) => {
        const { error } = validateGenre(req.body)
        if (error) return res.status(400).send(error.message)

        const genre = genres.find(genre => genre.id == req.params.id)
        if (!genre) return res.status(404).send("Genre does not exist")
        
        genre.genre = req.body.genre
        res.send(genre)
})
router.delete('/:id', (req, res) => {
        const genre = genres.find(genre => genre.id == req.params.id)
        if (!genre) return res.status(404).send("Genre does not exist")

        const index = genres.indexOf(genre)
        genres.splice(index, 1)
        res.send(genre)
})

const validateGenre = genre => {
        const schema = Joi.object({
                genre: Joi.string().max(10).required()
        })
        return schema.validate(genre)
}

module.exports = router
        
