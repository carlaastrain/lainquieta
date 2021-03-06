const express = require('express')
const router = express.Router()
const controllerCustomer = require('./controllers/customer.controller')
const controllerOrder = require('./controllers/order.controllers')
const controllerProduct = require('./controllers/products.controller')

// CUSTOMERS 😛
// get customers
router.get('/customers', controllerCustomer.getCustomers)

// create a single customer
router.post('/customers', controllerCustomer.createCustomer)

// delete customer
router.delete('/customers/:idCustomer', controllerCustomer.deleteCustomer)

// ORDER 📜
//  get orders
router.get('/orders', controllerOrder.getOrders)

//  get order
router.get('/orders/:idOrder', controllerOrder.getOrder)

//  post order
router.post('/orders', controllerOrder.createOrder)

// PRODUCT 🍕
// get products
router.get('/products', controllerProduct.getProducts)

// create a single product
router.post('/products', controllerProduct.createProduct)

// delete product
router.delete('/products/:idProduct', controllerProduct.deleteProduct)

module.exports = router
