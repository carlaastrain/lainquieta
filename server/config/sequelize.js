const { Sequelize } = require('sequelize')

const sequelize = new Sequelize('lainquietaDB', 'root', 'password', {
  host: 'localhost',
  dialect: 'mysql'
})

module.exports = sequelize
