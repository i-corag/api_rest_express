/*

const { Router } = require('express');
//const validatorHandler = require('../middlewares/validatorHandler');
//const {
//createBrandSchema,
//updateBrandSchema,
//getBrandSchema,
//} = require('../validationSchemas/brand.schema');
const {
  createBrand,
  getBrands,
  getBrand,
  updateBrand,
  deleteBrand,
} = require('../controllers/brands.controllers');

//validatorHandler(createBrandSchema, 'body')
//alidatorHandler(getBrandSchema, 'params')
//  validatorHandler(getBrandSchema, 'params'),
// validatorHandler(updateBrandSchema, 'body'),
//  validatorHandler(getBrandSchema, 'params'),

const router = Router();

//CREATE BRAND
router.post('/create', createBrand);

//GET BRANDS
router.get('/', getBrands);

//GET A SPECIFIC BRAND
router.get('/:id', getBrand);

//UPDATE BRAND
router.put('/update/:id', updateBrand);

//DELETE BRAND
router.delete('/delete/:id', deleteBrand);

module.exports = router;
*/
