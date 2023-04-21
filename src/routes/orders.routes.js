/*
const { Router } = require('express');
const validatorHandler = require('../middlewares/validatorHandler');
const {
  createOrderSchema,
  getOrderSchema,
} = require('../validationSchemas/order.schema');
const {
  createOrder,
  getOrders,
  getOrder,
} = require('../controllers/orders.controllers');

const router = Router();

//CREATE ORDER
router.post(
  '/create',
  validatorHandler(createOrderSchema, 'body'),
  createOrder
);

//GET ORDERS
router.get('/', getOrders);

//GET A SPECIFIC ORDER
router.get('/:id', validatorHandler(getOrderSchema, 'params'), getOrder);

module.exports = router;
*/
