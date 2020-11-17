//! Custom
const { ifAuthorized } = require('../../app/middleware/auth')
const { ifAdmin } = require('../../app/middleware/admin')
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

//! Genre Routes
genresRouter.get('/', async (req, res) => await getGenres(res))
genresRouter.get('/:id', async (req, res) => await getGenre(req, res))
genresRouter.post('/', ifAuthorized, async (req, res) => {await createGenre(req, res)})
genresRouter.put('/:id', ifAuthorized, async (req, res) => await updateGenre(req, res))
genresRouter.delete('/:id', [ifAuthorized, ifAdmin], async (req, res) => await deleteGenre(req, res))

//! Export router to use in index.js file 
module.exports = genresRouter