const fs = require('fs');
const path = require('path');
const crypto = require('crypto');

const categoriesData = JSON.parse(
  fs.readFileSync(path.join(__dirname, '../database/categories.json'), 'utf8')
);

const createCategory = async (category) => {
  let newCategory = categoriesData.find((x) => x.name === category.name);
  if (newCategory) {
    const error = `The category "${category.name}" already exists`;
    return error;
  } else {
    const id = crypto.randomBytes(10).toString('hex');
    newCategory = {
      id,
      ...category,
      createdAt: new Date().toLocaleString('en-US', { timeZone: 'UTC' }),
    };
    fs.writeFileSync(
      path.join(__dirname, '../database/categories.json'),
      JSON.stringify([...categoriesData, newCategory], null, 2)
    );
    return newCategory;
  }
};

const getCategories = async () => {
  return categoriesData;
};

const getCategory = async (id) => {
  const category = categoriesData.find((x) => x.id === id);
  if (!category) {
    const error = `The category ID: "${id}" does not exist`;
    return error;
  }
  return category;
};

const updateCategory = async (id, body) => {
  const categoryIndex = categoriesData.findIndex((x) => x.id === id); // si no lo encuentra retorna -1
  if (categoryIndex === -1) {
    const error = `The category ID: "${id}" does not exists`;
    return error;
  }
  const categoryName = categoriesData.find((x) => x.name === body.name);
  if (categoryName) {
    const error = `The category "${body.name}" already exists`;
    return error;
  }
  const updatedCategory = { ...categoriesData[categoryIndex], ...body };
  categoriesData[categoryIndex] = updatedCategory;
  fs.writeFileSync(
    path.join(__dirname, '../database/categories.json'),
    JSON.stringify([...categoriesData], null, 2)
  );
  return updatedCategory;
};

const deleteCategory = (id) => {
  const categoryIndex = categoriesData.findIndex((x) => x.id === id);
  if (categoryIndex === -1) {
    const error = `The category ID: "${id}" does not exists`;
    return error;
  }
  categoriesData.splice(categoryIndex, 1);
  fs.writeFileSync(
    path.join(__dirname, '../database/categories.json'),
    JSON.stringify([...categoriesData], null, 2)
  );
  return;
};

module.exports = {
  createCategory,
  getCategories,
  getCategory,
  updateCategory,
  deleteCategory,
};
