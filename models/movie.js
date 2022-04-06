'use strict'
const { Model } = require('sequelize')
module.exports = (sequelize, DataTypes) => {
  class Movie extends Model {
    static associate(models) {
      // define association here
      Movie.hasMany(models.Product, {
        foreignKey: 'movie_id',
        onDelete: 'cascade',
        onUpdate: 'cascade'
      })
    }
  }
  Movie.init(
    {
      name: DataTypes.STRING
    },
    {
      sequelize,
      modelName: 'Movie',
      tableName: 'movies'
    }
  )
  return Movie
}
