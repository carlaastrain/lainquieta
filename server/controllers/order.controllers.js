const Order = require('../models/order')
const Customer = require('../models/customer')
const Product = require('../models/product')
const sequelize = require('../models/index')

// Create Order
/* Expect an object of the shape
{
   "idCustomer": int
   "products": [{"quantity": float, "idProduct": int}, {"quantity": float, "idProduct": int}]
   "idAddress": int
}
*/
exports.createOrder = async (req, res) => {
  try {
    const result = await sequelize.transaction(async (t) => {
      const { idCustomer, products, idAddress } = req.body
      const order = await Order.create({
        CustomerId: idCustomer
      }, { transaction: t })

      for (const p of products) {
        const product = await Product.findByPk(p.id, { transaction: t })
        await order.addProduct(product, { through: { quantity: p.quantity }, transaction: t })
      }

      const result = await Order.findByPk(order.id, { include: [Product, Customer], transaction: t })
      return result
    })

    // If the execution reaches this line, the transaction has been committed successfully
    // `result` is whatever was returned from the transaction callback (the `user`, in this case)
    res.send(result)
  } catch (error) {
    res.status(500)
    res.send(error)
  }
}

// get Order
exports.getOrder = async (req, res) => {
  try {
    const { idOrder } = req.params
    const order = await Order.findByPk(idOrder, { include: [Product, Customer] })
    res.send(order)
  } catch (error) {
    res.status(500)
    res.send(error)
  }
}

// get Orders
exports.getOrders = async (req, res) => {
  try {
    const orders = await Order.findAll()

    res.send(orders)
  } catch (error) {
    res.status(500)
    res.send(error)
  }
}
