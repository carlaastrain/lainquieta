const sequelize = require('../config/sequelize');
const Address = require('./address');
const Category = require('./category');
const Customer = require('./customer');
const Order = require('./order');
const Product = require('./product');
const ProductsHasOrders = require('./products_has_orders');

// Address  --->
Address.belongsTo(Customer);
Address.hasMany(Order);

// Category  --->
// The Product.belongsToMany(Category, { through: 'Products_has_Categories' }) association means that a Many-To-Many relationship
// exists between Product and Category, using table Products_has_Categories as junction table, which will have the foreign keys
// (aId and bId, for example). Sequelize will automatically
// create this model Products_has_Categories(unless it already exists) and define the appropriate foreign keys on it.
Category.belongsToMany(Product, { through: 'Products_has_Categories' });

// Customer  --->

// The Customer.hasMany(Address) association means that a One-To-Many relationship exists
// between Customer and Address, with the foreign key being defined in the target model (Address).
Customer.hasMany(Address);
Customer.hasMany(Order);
/* The Customer.belongsToMany(Product, { through: 'Likes' }) association means that a Many-To-Many relationship
exists between Customer and Product, using table Likes as junction table, which will have the foreign keys
(aId and bId, for example). Sequelize will automatically
create this model Likes(unless it already exists) and define the appropriate foreign keys on it. */
Customer.belongsToMany(Product, { through: 'Likes' });

// Order --->
Order.belongsTo(Customer);
Order.belongsTo(Address);

// The Order.belongsToMany(Product, { through: 'Products_has_Orders' }) association means that a Many-To-Many relationship
// exists between Order and Product, using table Products_has_Orders as junction table, which will have the foreign keys
// (aId and bId, for example). Sequelize will automatically
// create this model Products_has_Orders(unless it already exists) and define the appropriate foreign keys on it.
Order.belongsToMany(Product, { through: ProductsHasOrders });

// Product --->
// The Product.belongsToMany(Order, { through: 'Products_has_Orders' }) association means that a Many-To-Many relationship
// exists between Order and Product, using table Products_has_Orders as junction table, which will have the foreign keys
// (aId and bId, for example). Sequelize will automatically
// create this model Products_has_Orders(unless it already exists) and define the appropriate foreign keys on it.
Product.belongsToMany(Order, { through: ProductsHasOrders });

// The Product.belongsToMany(Category, { through: 'Products_has_Categories' }) association means that a Many-To-Many relationship
// exists between Product and Category, using table Products_has_Categories as junction table, which will have the foreign keys
// (aId and bId, for example). Sequelize will automatically
// create this model Products_has_Categories(unless it already exists) and define the appropriate foreign keys on it.
Product.belongsToMany(Category, { through: 'Products_has_Categories' });

// The Product.belongsToMany(Customer, { through: 'Likes' }) association means that a Many-To-Many relationship
// exists between Customer and Product, using table Likes as junction table, which will have the foreign keys
// (aId and bId, for example). Sequelize will automatically
// create this model Likes(unless it already exists) and define the appropriate foreign keys on it.
Product.belongsToMany(Customer, { through: 'Likes' });

module.exports = sequelize;
