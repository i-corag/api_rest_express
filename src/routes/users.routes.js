const { Router } = require('express');
const validatorHandler = require('../middlewares/validatorHandler');
const {
  createUserSchema,
  updateUserSchema,
  getUserSchema,
} = require('../validationSchemas/user.schema');
const {
  getUsers,
  getUser,
  createUser,
  updateUser,
  deleteUser,
} = require('../controllers/users.controllers');

const router = Router();

//GET USERS
router.get('/', getUsers);

//GET A SPECIFIC USER
router.get('/:id', validatorHandler(getUserSchema, 'params'), getUser);

//CREATE USER
router.post('/create', createUser);

//UPDATE USER
router.put(
  '/update/:id',
  /*validatorHandler(getUserSchema, 'params'),
  validatorHandler(updateUserSchema, 'body'),*/
  updateUser
);

//DELETE USER
router.delete(
  '/delete/:id',
  validatorHandler(getUserSchema, 'params'),
  deleteUser
);

module.exports = router;
