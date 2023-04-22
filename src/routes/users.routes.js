const { Router } = require('express');
const validatorHandler = require('../middlewares/validatorHandler');
const {
  createUserSchema,
  updateUserSchema,
  getUserSchema,
} = require('../validationSchemas/user.schema');
const {
  createUser,
  getUsers,
  getUser,
  updateUser,
  deleteUser,
} = require('../controllers/users.controllers');

const router = Router();
//CREATE USER
router.post('/create', validatorHandler(createUserSchema, 'body'), createUser);

//READ USERS
router.get('/', getUsers);

//READ A SPECIFIC USER
router.get('/:id', validatorHandler(getUserSchema, 'params'), getUser);

//UPDATE USER
router.put(
  '/update/:id',
  validatorHandler(getUserSchema, 'params'),
  validatorHandler(updateUserSchema, 'body'),
  updateUser
);

//DELETE USER
router.delete(
  '/delete/:id',
  validatorHandler(getUserSchema, 'params'),
  deleteUser
);

module.exports = router;
