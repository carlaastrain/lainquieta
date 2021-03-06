const { DataTypes } = require('sequelize');
const sequelize = require('../config/sequelize');

// this is my model Addres, it will convert it to addresses for create a table
const Address = sequelize.define('Address', {
  // Model attributes are defined here
  street: {
    type: DataTypes.STRING,
    allowNull: false
  },
  number: {
    type: DataTypes.STRING,
    allowNull: false
  },
  floor: {
    type: DataTypes.STRING
  },
  doorbell: {
    type: DataTypes.STRING
  },
  city: {
    type: DataTypes.STRING,
    allowNull: false
  },
  postalCode: {
    type: DataTypes.STRING,
    allowNull: false
  }
}, {
  // Other model options go here
});

module.exports = Address;
