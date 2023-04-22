const categoryService = require('../services/categories.services');

//CREATE CATEGORY
const createCategory = async (req, res) => {
  const category = req.body;
  try {
    const createdCategory = await categoryService.createCategory(category);
    return res.status(201).send(createdCategory);
  } catch (err) {
    return res.status(500).send('Server error: ' + err.message);
  }
};

//READ ALL CATEGORIES
const getCategories = async (req, res) => {
  try {
    const categories = await categoryService.getCategories();
    return res.status(201).json(categories);
  } catch (err) {
    return res.status(500).send('Server error: ' + err.message);
  }
};

//READ ONE CATEGORY
const getCategory = async (req, res) => {
  const { id } = req.params;
  try {
    const category = await categoryService.getCategory(id);
    return res.status(201).send(category);
  } catch (err) {
    return res.status(500).send('Server error: ' + err.message);
  }
};

//UPDATE CATEGORY
const updateCategory = async (req, res) => {
  const { id } = req.params;
  const body = req.body;
  try {
    const updatedCategory = await categoryService.updateCategory(id, body);
    return res.status(201).send(updatedCategory);
  } catch (err) {
    return res.status(500).send('Server error: ' + err.message);
  }
};

//DELETE CATEGORY
const deleteCategory = async (req, res) => {
  const { id } = req.params;
  try {
    await categoryService.deleteCategory(id);
    return res.status(201).send('Category:' + id + ' deleted');
  } catch (err) {
    return res.status(500).send('Server error: ' + err.message);
  }
};

module.exports = {
  createCategory,
  getCategories,
  getCategory,
  updateCategory,
  deleteCategory,
};
