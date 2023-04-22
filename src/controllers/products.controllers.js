const productService = require('../services/products.services');

// CREATE PRODUCT
const createProduct = async (req, res) => {
  const body = req.body;
  try {
    const createdProduct = await productService.createProduct(body);
    return res.status(201).send(createdProduct);
  } catch (err) {
    return res.status(500).send('Server error: ' + err.message);
  }
};

//READ ALL PRODUCTS
const getProducts = async (req, res) => {
  try {
    const products = await productService.getProducts();
    return res.status(201).send(products);
  } catch (err) {
    return res.status(500).send('Server error: ' + err.message);
  }
};

//READ ONE PRODUCT
const getProduct = async (req, res) => {
  const { id } = req.params;
  try {
    const product = await productService.getProduct(id);
    return res.status(201).send(product);
  } catch (err) {
    return res.status(500).send('Server error: ' + err.message);
  }
};

//UPDATE PRODUCT
const updateProduct = async (req, res) => {
  const { id } = req.params;
  const body = req.body;
  try {
    const updatedProduct = await productService.updateProduct(id, body);
    return res.status(201).send(updatedProduct);
  } catch (err) {
    return res.status(500).send('Server error: ' + err.message);
  }
};

//DELETE PRODUCT
const deleteProduct = async (req, res) => {
  const { id } = req.params;
  try {
    await productService.deleteProduct(id);
    return res.status(201).send('Product: ' + id + ' deleted');
  } catch (err) {
    return res.status(500).send('Server error: ' + err.message);
  }
};

module.exports = {
  createProduct,
  getProducts,
  getProduct,
  updateProduct,
  deleteProduct,
};
