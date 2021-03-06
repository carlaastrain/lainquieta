// The controller it's what actually responds to my http request
// You can read the whole table from the database with the findAll method:
const Category = require('../models/category');
const Product = require('../models/product');

// GET categories of products 
exports.getCategories = async (req, res) => {
  try {
    const categories = await Category.findAll();
    res.send(categories);
  } catch (error) {
    res.status(500);
    res.send(error);
  }
};

// GET Category
exports.getCategory = async (req, res) => {
  try {
    const { idCategory } = req.params;
    const order = await Category.findByPk(idCategory, { include: [Product] });
    res.send(order);
  } catch (error) {
    res.status(500);
    res.send(error);
  }
};

// DELETE Category
exports.deleteCategory = async (req, res) => {
  try {
    const { idCategory } = req.params;
    const deletedCategoryId = await Category.destroy({
      where: { id: idCategory }
    });
    res.json(deletedCategoryId);
  } catch (error) {
    res.status(500);
    res.send(error);
  }
};