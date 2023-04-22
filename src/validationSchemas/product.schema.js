const Joi = require('joi');

const id = Joi.string().min(20).max(20);
const name = Joi.string().min(3).max(50);
const description = Joi.string().min(10);
const price = Joi.number().integer().min(2);
const image = Joi.string().uri();
const stock = Joi.number().integer();
const category = Joi.string().min(3).max(15);
const brand = Joi.string().min(3).max(15);

const createProductSchema = Joi.object({
  name: name.required(),
  description: description.required(),
  price: price.required(),
  image: image.required(),
  stock: stock.required(),
  category: category.required(),
  brand: brand.required(),
});

const updateProductSchema = Joi.object({
  id: id.required(),
  name,
  description,
  price,
  image,
  stock,
  category,
  brand,
});

const getProductSchema = Joi.object({
  id: id.required(),
});

module.exports = {
  createProductSchema,
  updateProductSchema,
  getProductSchema,
};
