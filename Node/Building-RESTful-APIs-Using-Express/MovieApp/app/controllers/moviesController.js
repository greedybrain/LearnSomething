//! Controller actions (Helper functions)
const movie = require('../models/movie')
const { Movie, validateMovie } = require('../models/movie')
const { Genre } = require('../models/genre')

const getMovies = async res => {
        const movies = await Movie.find().sort('name')

        res.send(movies)
}

const getMovie = async (req, res)=> {
        const movie = await Movie.findById(req.params.id) 
        if (!movie) return res.status(404).send("Movie does not exist")

        res.send(movie)
}

const createMovie = async (req, res) => {
        const { error } = validateMovie(req.body)
        if (error) return res.status(400).send(error.message)

        const genre = await Genre.findById(req.body.genreId);
        if (!genre) return res.status(400).send('Invalid genre.')

        const newMovie = new Movie({
                title: req.body.title,
                genre: {
                        _id: genre._id,
                        name: genre.name
                },
                numberInStock: req.body.numberInStock,
                dailyRentalRate: req.body.dailyRentalRate
        })
        try {
                let movie = await newMovie.save()
                res.send(movie)
        } catch (exc) {
                for (field in exc.errors) {
                        console.error(exc.errors[field].message)
                }
        }
}

const updateMovie = async (req, res) => {
        const { error } = validateMovie(req.body)
        if (error) return res.status(400).send(error.message)

        const movie = await Movie.findByIdAndUpdate(
                req.params.id,
                {
                        title: req.body.title,
                        genre: {
                                name: req.body.name
                        },
                        numberInStock: req.body.numberInStock,
                        dailyRentalRate: req.body.dailyRentalRate
                },
                { new: true }
        )
        if (!movie) return res.status(404).send("Movie does not exist")

        res.send(movie)
}

const deleteMovie = async (req, res) => {
        const movie = await Movie.findByIdAndDelete(req.params.id)
        if (!movie) return res.status(404).send("Movie does not exist")

        res.send(movie)
}

// //! Exports
module.exports = {
        getMovies,
        getMovie,
        createMovie,
        updateMovie,
        deleteMovie,
}