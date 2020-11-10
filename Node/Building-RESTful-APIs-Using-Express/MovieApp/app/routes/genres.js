//! Custom
const { 
        getGenres, 
        getGenre,
        createGenre, 
        updateGenre, 
        deleteGenre 
} = require('../controllers/genresController');

//! Packages
const express = require('express');
const genresRouter = express.Router()

//! Get all genres
genresRouter.get('/', async (req, res) => await getGenres(res))
genresRouter.get('/:id', async (req, res) => await getGenre(req, res))
genresRouter.post('/', async (req, res) => await createGenre(req, res))
genresRouter.put('/:id', async (req, res) => await updateGenre(req, res))
genresRouter.delete('/:id', async (req, res) => await deleteGenre(req, res))

//! Export router to use in index.js file 
module.exports = genresRouter
        
