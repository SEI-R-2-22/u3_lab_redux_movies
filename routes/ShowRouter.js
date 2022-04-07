const ShowController = require('../controllers/ShowController')
const Router = require('express').Router()

Router.get('/', ShowController.getAll)

module.exports = { path: ShowController.path, Router }
