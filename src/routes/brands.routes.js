const { Router } = require('express');
const validatorHandler = require('../middlewares/validatorHandler');
const {
  createBrandSchema,
  updateBrandSchema,
  getBrandSchema,
} = require('../validationSchemas/brand.schema');
const {
  createBrand,
  getBrands,
  getBrand,
  updateBrand,
  deleteBrand,
} = require('../controllers/brands.controllers');

const router = Router();

//CREATE BRAND
router.post(
  '/create',
  validatorHandler(createBrandSchema, 'body'),
  createBrand
);

//READ BRANDS
router.get('/', getBrands);

//READ A SPECIFIC BRAND
router.get('/:id', validatorHandler(getBrandSchema, 'params'), getBrand);

//UPDATE BRAND
router.put(
  '/update/:id',
  validatorHandler(getBrandSchema, 'params'),
  validatorHandler(updateBrandSchema, 'body'),
  updateBrand
);

//DELETE BRAND
router.delete(
  '/delete/:id',
  validatorHandler(getBrandSchema, 'params'),
  deleteBrand
);

module.exports = router;
