const sequelize = require('../config/sequelize');

const Order = sequelize.define('Order', {

}, {
  // Other model options go here
});

console.log('order table success');
module.exports = Order;
