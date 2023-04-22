const fs = require('fs');
const path = require('path');
const crypto = require('crypto');

const productsData = JSON.parse(
  fs.readFileSync(path.join(__dirname, '../database/products.json'), 'utf8')
);
const brandsData = JSON.parse(
  fs.readFileSync(path.join(__dirname, '../database/brands.json'), 'utf8')
);
const categoriesData = JSON.parse(
  fs.readFileSync(path.join(__dirname, '../database/categories.json'), 'utf8')
);

const createProduct = async (product) => {
  let newProduct = productsData.find((x) => x.name === product.name);
  if (newProduct) {
    const error = `The product "${product.name}" already exists`;
    return error;
  }
  const category = categoriesData.find(
    (category) => category.name === product.category
  );
  if (!category) {
    const error = `The category "${product.category}" does not exists`;
    return error;
  }
  const brand = brandsData.find((brand) => brand.name === product.brand);
  if (!brand) {
    const error = `The brand "${product.brand}" does not exists`;
    return error;
  }
  const id = crypto.randomBytes(10).toString('hex');
  newProduct = {
    id,
    ...product,
    createdAt: new Date().toLocaleString('en-US', { timeZone: 'UTC' }),
  };

  fs.writeFileSync(
    path.join(__dirname, '../database/products.json'),
    JSON.stringify([...productsData, newProduct], null, 2)
  );
  return newProduct;
};

const getProducts = async () => {
  return productsData;
};

const getProduct = async (id) => {
  const product = productsData.find((x) => x.id === id);
  if (!product) {
    const error = `The product ID: "${id}" does not exists`;
    return error;
  }
  return product;
};

const updateProduct = async (id, body) => {
  const productIndex = productsData.findIndex((x) => x.id === id); // si no lo encuentra retorna -1
  if (productIndex === -1) {
    const error = `The product ID: "${id}" does not exists`;
    return error;
  }
  const updatedProduct = { ...productsData[productIndex], ...body };
  productsData[productIndex] = updatedBrand;
  fs.writeFileSync(
    path.join(__dirname, '../database/products.json'),
    JSON.stringify([...productsData], null, 2)
  );
  return updatedProduct;
};

const deleteProduct = (id) => {
  const productIndex = productsData.findIndex((x) => x.id === id);
  if (productIndex === -1) {
    const error = `The product ID: "${id}" does not exists`;
    return error;
  }
  productsData.splice(productIndex, 1);
  fs.writeFileSync(
    path.join(__dirname, '../database/products.json'),
    JSON.stringify([...productsData], null, 2)
  );
  return;
};

module.exports = {
  createProduct,
  getProducts,
  getProduct,
  updateProduct,
  deleteProduct,
};
