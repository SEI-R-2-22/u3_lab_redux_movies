'use strict'
const { Model } = require('sequelize')
module.exports = (sequelize, DataTypes) => {
  class Show extends Model {
    static associate(models) {
      // define association here
      Show.hasMany(models.Product, {
        foreignKey: 'show_id',
        onDelete: 'cascade',
        onUpdate: 'cascade'
      })
    }
  }
  Show.init(
    {
      name: DataTypes.STRING
    },
    {
      sequelize,
      modelName: 'Show',
      tableName: 'shows'
    }
  )
  return Show
}
