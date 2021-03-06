const Order = require('../models/order');
const Customer = require('../models/customer');
const Product = require('../models/product');
const Address = require('../models/address');
const sequelize = require('../models/index');

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

      const { idCustomer, products, idAddress } = req.body;
      
      const order = await Order.create({
        CustomerId: idCustomer, 
        AddressId: idAddress
      }, { transaction: t });

      for (const p of products) {
        const product = await Product.findByPk(p.id, { transaction: t });
        if (p.quantity > product.quantityStock) {
          throw Error ('No more stock');
        } else {
          //In Model Instances Sequelize explain how update and .save() the table 
          product.quantityStock = product.quantityStock - p.quantity;
          await product.save();
        }
        // Special methods/mixins added to instances Here is where I connect my order with my product
        await order.addProduct(product, { through: { quantity: p.quantity }, transaction: t });
      }

      //Model Instances --> Reloading an Instance to ensure we have the latest data including the relation with Product and Customer
      //https://sequelize.org/master/manual/model-instances.html#reloading-an-instance 
      return await order.reload({ include: [Product, Customer, Address], transaction: t });
    });

    // If the execution reaches this line, the transaction has been committed successfully
    // `result` is whatever was returned from the transaction callback (the `user`, in this case)
    res.send(result);
  } catch (error) {
    console.log(error);
    res.status(500);
    res.send(error);
  }
};

// get Order
exports.getOrder = async (req, res) => {
  try {
    const { idOrder } = req.params;
    const order = await Order.findByPk(idOrder, { include: [Product, Customer, Address] });
    res.send(order);
  } catch (error) {
    res.status(500);
    res.send(error);
  }
};

// get Orders
exports.getOrders = async (req, res) => {
  try {
    const orders = await Order.findAll();

    res.send(orders);
  } catch (error) {
    res.status(500);
    res.send(error);
  }
};
