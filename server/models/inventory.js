const { DataTypes } = require('sequelize')
const sequelize = require('../config/sequelize')
const Inventory = sequelize.define('Inventory', {

  // Model attributes are defined here
  quantity: {
    type: DataTypes.FLOAT

  },
  unit: {
    type: DataTypes.STRING
  },
  expiration: {
    type: DataTypes.DATE
    // allowNull defaults to true
  },
  received: {
    type: DataTypes.DATE
    // allowNull defaults to true
  }
}, {
  // Other model options go here
})

console.log('inventory table success')
module.exports = Inventory
