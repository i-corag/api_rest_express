const Joi = require('joi');

const id = Joi.string().min(20).max(20);
const name = Joi.string().min(3).max(15);

const createCategorySchema = Joi.object({
  name: name.required(),
});

const updateCategorySchema = Joi.object({
  name,
});

const getCategorySchema = Joi.object({
  id: id.required(),
});

module.exports = {
  createCategorySchema,
  updateCategorySchema,
  getCategorySchema,
};
