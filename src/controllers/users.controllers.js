const userService = require('../services/users.services');

//GET ALL USERS
const getUsers = async (req, res) => {
  try {
    const users = await userService.getUsers();
    res.status(201).send(users); //.json(users)
  } catch (err) {
    return res.status(500).send('Server error: ' + err.message);
  }
};

//GET ONE USER
const getUser = async (req, res) => {
  try {
    const { id } = req.params;
    const user = await userService.getUser(id);
    return res.status(201).send(user);
  } catch (err) {
    return res.status(500).send('Server error: ' + err.message);
  }
};

//CREATE USER
const createUser = async (req, res) => {
  const user = req.body;
  try {
    const createdUser = await userService.createUser(user);
    return res.status(201).send(createdUser);
  } catch (err) {
    return res.status(500).send('Server error: ' + err.message);
  }
};

//UPDATE USER
const updateUser = async (req, res) => {
  const { id } = req.params;
  const body = req.body;
  try {
    const updatedUser = await userService.updateUser(id, body);
    return res.status(201).send(updatedUser);
  } catch (err) {
    return res.status(500).send('Server error: ' + err.message);
  }
};

//DELETE USER
const deleteUser = async (req, res) => {
  const { id } = req.params;
  try {
    await userService.deleteUser(id);
    res.status(204).json(`the user: ${id} has been deleted`);
  } catch (err) {
    return res.status(500).send('Server error: ' + err.message);
  }
};

module.exports = {
  getUsers,
  getUser,
  createUser,
  updateUser,
  deleteUser,
};
