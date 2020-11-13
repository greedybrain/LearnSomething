//! Custom
const { 
        getMovies,
        getMovie,
        createMovie,
        updateMovie,
        deleteMovie
} = require('../controllers/moviesController');

//! Packages
const express = require('express');
const moviesRouter = express.Router()

//! Get all genres
moviesRouter.get('/', async (req, res) => await getMovies(res))
moviesRouter.get('/:id', async (req, res) => await getMovie(req, res))
moviesRouter.post('/', async (req, res) => await createMovie(req, res))
moviesRouter.put('/:id', async (req, res) => await updateMovie(req, res))
moviesRouter.delete('/:id', async (req, res) => await deleteMovie(req, res))

//! Export router to use in index.js file 
module.exports = moviesRouter
        
