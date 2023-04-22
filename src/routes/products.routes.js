const { Router } = require('express');
const validatorHandler = require('../middlewares/validatorHandler');
const {
  createProductSchema,
  updateProductSchema,
  getProductSchema,
} = require('../validationSchemas/product.schema');
const {
  createProduct,
  getProducts,
  getProduct,
  updateProduct,
  deleteProduct,
} = require('../controllers/products.controllers');

const router = Router();

//CREATE PRODUCT
router.post(
  '/create',
  validatorHandler(createProductSchema, 'body'),
  createProduct
);

//READ PRODUCTS
router.get('/', getProducts);

//READ A SPECIFIC PRODUCT
router.get('/:id', validatorHandler(getProductSchema, 'params'), getProduct);

//UPDATE PRODUCT
router.patch(
  '/update/:id',
  validatorHandler(getProductSchema, 'params'),
  validatorHandler(updateProductSchema, 'body'),
  updateProduct
);

//DELETE PRODUCT
router.delete(
  '/delete/:id',
  validatorHandler(getProductSchema, 'params'),
  deleteProduct
);

module.exports = router;
