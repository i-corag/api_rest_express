/*

const { Router } = require('express');
const validatorHandler = require('../middlewares/validatorHandler');
const {
  createCategorySchema,
  updateCategorySchema,
  getCategorySchema,
} = require('../validationSchemas/category.schema');
const {
  createCategory,
  getCategories,
  getCategory,
  updateCategory,
  deleteCategory,
} = require('../controllers/categories.controllers');

const router = Router();

//CREATE CATEGORY
router.post(
  '/create',
  validatorHandler(createCategorySchema, 'body'),
  createCategory
);

//GET CATEGORIES
router.get('/', getCategories);

//GET A SPECIFIC CATEGORY
router.get('/:id', validatorHandler(getCategorySchema, 'params'), getCategory);

//UPDATE CATEGORY
router.put(
  '/update/:id',
  validatorHandler(getCategorySchema, 'params'),
  validatorHandler(updateCategorySchema, 'body'),
  updateCategory
);

//DELETE CATEGORY
router.delete(
  '/delete/:id',
  validatorHandler(getCategorySchema, 'params'),
  deleteCategory
);

module.exports = router;

*/
