const { DataTypes } = require('sequelize');
const sequelize = require('../config/sequelize');

// Advanced M:N Associations Sequelize
const ProductsHasOrders = sequelize.define('ProductsHasOrders', {
  // Model attributes are defined here
  quantity: {
    type: DataTypes.FLOAT,
    allowNull: false
  }
}, {
  timestamps: false
});

module.exports = ProductsHasOrders;
