// The controller it's what actually responds to my http request
// You can read the whole table from the database with the findAll method:

const Product = require('../models/product');

// Find products
exports.getProducts = async (req, res) => {
  try {
    const products = await Product.findAll();
    res.send(products);
  } catch (error) {
    res.status(500);
    res.send(error);
  }
};

// POST single product
exports.createProduct = async (req, res) => {
  try {
    const { name, imageUrl, price } = req.body;
    const createdProduct = await Product.create({
      name: name,
      imageUrl: imageUrl,
      price: price
    });
    res.json(createdProduct);
  } catch (error) {
    res.status(500);
    res.send(error);
  }
};

// delete product
exports.deleteProduct = async (req, res) => {
  try {
    const { idProduct } = req.params;
    const deletedProductId = await Product.destroy({
      where: { id: idProduct }
    });
    res.json(deletedProductId);
  } catch (error) {
    res.status(500);
    res.send(error);
  }
};
