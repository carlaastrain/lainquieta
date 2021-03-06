const sequelize = require('../config/sequelize')

const Delivery = sequelize.define('Delivery', {
// I am just defining without properties, only has an ID
}, {
  // Other model options go here
})

console.log('delivery table success')
module.exports = Delivery
