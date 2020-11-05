//! IMPORTS
const Joi = require('joi');
const express = require('express');
const app = express();

app.use(express.json()) //! adding middleware

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
app.get('/api/genres', (req, res) => res.send(genres))
app.get('/api/genres/:id', (req, res) => {
        const genre = genres.find(genre => genre.id == req.params.id)

        if (!genre) return res.status(404).send("Genre does not exist")

        res.send(genre)
})
app.post('/api/genres', (req, res) => {
        const { error } = validateGenre(req.body)
        if (error) return res.status(400).send(error.message)
        
        const genre = {
                id: genres.length + 1,
                genre: req.body.genre
        }
        genres.push(genre)
        res.send(genre)
})
app.put('/api/genres/:id', (req, res) => {
        const { error } = validateGenre(req.body)
        if (error) return res.status(400).send(error.message)

        const genre = genres.find(genre => genre.id == req.params.id)
        if (!genre) return res.status(404).send("Genre does not exist")
        
        genre.genre = req.body.genre
        res.send(genre)
})
app.delete('/api/genres/:id', (req, res) => {
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

//! LISTENING
const PORT = process.env.PORT || 3000
app.listen(PORT, () => console.log(`Listening on port ${PORT}...`))