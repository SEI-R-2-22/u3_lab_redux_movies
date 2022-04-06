const { Show, Product } = require('../models')

module.exports = class ShowController {
  static path = 'shows'

  static async getAll(req, res) {
    try {
      const shows = await Show.findAll()
      res.send(shows)
    } catch (error) {
      throw error
    }
  }
}
