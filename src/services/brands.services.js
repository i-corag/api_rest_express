const fs = require('fs');
const path = require('path');
const crypto = require('crypto');

const brandsData = JSON.parse(
  fs.readFileSync(path.join(__dirname, '../database/brands.json'), 'utf8')
);

const createBrand = async (brand) => {
  let newBrand = brandsData.find((x) => x.name === brand.name);
  if (newBrand) {
    const error = `The brand "${brand.name}" already exists`;
    return error;
  } else {
    const id = crypto.randomBytes(10).toString('hex');
    newBrand = {
      id,
      ...brand,
      createdAt: new Date().toLocaleString('en-US', { timeZone: 'UTC' }),
    };
    fs.writeFileSync(
      path.join(__dirname, '../database/brands.json'),
      JSON.stringify([...brandsData, newBrand], null, 2)
    );
    return newBrand;
  }
};

const getBrands = async () => {
  return brandsData;
};

const getBrand = async (id) => {
  const brand = brandsData.find((x) => x.id === id);
  if (!brand) {
    const error = `The brand ID: "${id}" does not exist`;
    return error;
  }
  return brand;
};

const updateBrand = async (id, body) => {
  const brandIndex = brandsData.findIndex((x) => x.id === id); // si no lo encuentra retorna -1
  if (brandIndex === -1) {
    const error = `The brand ID: "${id}" does not exists`;
  }
  const brandName = brandsData.find((x) => x.name === body.name);
  if (brandName) {
    const error = `The brand "${body.name}" already exists`;
    return error;
  }
  const updatedBrand = { ...brandsData[brandIndex], ...body };
  brandsData[brandIndex] = updatedBrand;
  fs.writeFileSync(
    path.join(__dirname, '../database/brands.json'),
    JSON.stringify([...brandsData], null, 2)
  );
  return updatedBrand;
};

const deleteBrand = (id) => {
  const brandIndex = brandsData.findIndex((x) => x.id === id);
  if (brandIndex === -1) {
    const error = `The brand ID: "${id}" does not exists`;
    return error;
  }
  brandsData.splice(brandIndex, 1);
  fs.writeFileSync(
    path.join(__dirname, '../database/brands.json'),
    JSON.stringify([...brandsData], null, 2)
  );
  return;
};

module.exports = {
  createBrand,
  getBrands,
  getBrand,
  updateBrand,
  deleteBrand,
};
