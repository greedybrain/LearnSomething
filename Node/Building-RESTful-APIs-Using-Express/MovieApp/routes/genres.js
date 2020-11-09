//! Custom
const { 
        getGenres, 
        getGenre,
        createGenre, 
        updateGenre, 
        deleteGenre 
} = require('../models/genre');

//! Packages
const express = require('express');
const genresRouter = express.Router()

//! get all genres
genresRouter.get('/', async (req, res) => getGenres(res))
genresRouter.get('/:id', async (req, res) => getGenre(req, res))
genresRouter.post('/', async (req, res) => createGenre(req, res))
genresRouter.put('/:id', async (req, res) => updateGenre(req, res))
genresRouter.delete('/:id', async (req, res) => deleteGenre(req, res))

//! Export router to use in index.js file 
module.exports = genresRouter
        
