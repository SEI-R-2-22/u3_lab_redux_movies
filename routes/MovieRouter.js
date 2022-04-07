const MoviesController = require('../controllers/MovieController')
const Router = require('express').Router()

Router.get('/', MoviesController.getAll)

module.exports = { path: MoviesController.path, Router }
