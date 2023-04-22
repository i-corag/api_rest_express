const brandService = require('../services/brands.services');

//CREATE BRAND
const createBrand = async (req, res) => {
  const brand = req.body;
  try {
    const createdBrand = await brandService.createBrand(brand);
    return res.status(201).send(createdBrand);
  } catch (err) {
    return res.status(500).send('Server error: ' + err.message);
  }
};

//READ ALL BRANDS
const getBrands = async (req, res) => {
  try {
    const brands = await brandService.getBrands();
    return res.status(201).send(brands);
  } catch (err) {
    return res.status(500).send('Server error: ' + err.message);
  }
};

//READ ONE BRAND
const getBrand = async (req, res) => {
  const { id } = req.params;
  try {
    const brand = await brandService.getBrand(id);
    return res.status(201).send(brand);
  } catch (err) {
    return res.status(500).send('Server error: ' + err.message);
  }
};

//UPDATE BRAND
const updateBrand = async (req, res) => {
  const { id } = req.params;
  const body = req.body;
  try {
    const updatedBrand = await brandService.updateBrand(id, body);
    return res.status(201).send(updatedBrand);
  } catch (err) {
    return res.status(500).send('Server error: ' + err.message);
  }
};

//DELETE CATEGORY
const deleteBrand = async (req, res) => {
  const { id } = req.params;
  try {
    await brandService.deleteBrand(id);
    return res.status(201).send('Brand:' + id + ' deleted');
  } catch (err) {
    return res.status(500).send('Server error: ' + err.message);
  }
};

module.exports = {
  createBrand,
  getBrands,
  getBrand,
  updateBrand,
  deleteBrand,
};
