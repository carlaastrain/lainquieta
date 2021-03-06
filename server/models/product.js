const { DataTypes } = require('sequelize');
const sequelize = require('../config/sequelize');

const Product = sequelize.define('Product', {
  // Model attributes are defined here
  name: {
    type: DataTypes.STRING,
    allowNull: false
  },
  imageUrl: {
    type: DataTypes.STRING
    // allowNull defaults to true
  },
  price: {
    type: DataTypes.DECIMAL(10, 2)
    // allowNull defaults to true
  },
  quantityStock: {
    type: DataTypes.FLOAT
    // allowNull defaults to true
  },
  units: {
    type: DataTypes.STRING
    // allowNull defaults to true
  }
}, {
  // Other model options go here
});
console.log('product table success');
module.exports = Product;
