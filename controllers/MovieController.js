const { Movie, Product } = require('../models')

module.exports = class MovieController {
  static path = 'movies'

  static async getAll(req, res) {
    try {
      const movies = await Movie.findAll()
      res.send(movies)
    } catch (error) {
      throw error
    }
  }
}
