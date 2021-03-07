// The controller it's what actually responds to my http request
// You can read the whole table from the database with the findAll method:
const Customer = require('../models/customer');

// Find customers
exports.getCustomers = async (req, res) => {
  try {
    const customers = await Customer.findAll();

    res.send(customers);
  } catch (error) {
    res.status(500);
    res.send(error);
  }
};

// Find customers
exports.getCustomer = async (req, res) => {
  try {
    const {idCustomer} = req.params; 
    const customer = await Customer.findByPk(idCustomer);

    res.send(customer);
  } catch (error) {
    res.status(500);
    res.send(error);
  }
};

// POST single customer
exports.createCustomer = async (req, res) => {
  try {
    const { firstName, lastName } = req.body;
    const createdCustomer = await Customer.create({
      firstName: firstName,
      lastName: lastName
    });
    res.json(createdCustomer);
  } catch (error) {
    res.status(500);
    res.send(error);
  }
};

// delete Customer
exports.deleteCustomer = async (req, res) => {
  try {
    const { idCustomer } = req.params;
    const deletedCustomerId = await Customer.destroy({
      where: { id: idCustomer }
    });
    res.json(deletedCustomerId);
  } catch (error) {
    res.status(500);
    res.send(error);
  }
};
