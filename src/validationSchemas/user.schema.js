const Joi = require('joi');

const id = Joi.string().min(10);
const name = Joi.string().min(3).max(15);
const email = Joi.string().email();
const password = Joi.string().min(8);
const address = Joi.string().min(6);
const phone = Joi.number().integer().min(9).max(9);
const role = Joi.string().min(5);

const createUserSchema = Joi.object({
  name: name.required(),
  email: email.required(),
  password: password.required(),
  address: address.required(),
  phone: phone.required(),
});

const getUserSchema = Joi.object({
  id: id.required(),
});

const updateUserSchema = Joi.object({
  id: id.required(),
  email,
  name,
  password,
  address,
  phone,
  role,
});

const deleteUserSchema = Joi.object({
  id: id.required(),
});

module.exports = {
  createUserSchema,
  getUserSchema,
  updateUserSchema,
  deleteUserSchema,
};
