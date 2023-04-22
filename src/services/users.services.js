const fs = require('fs');
const path = require('path');
const bcrypt = require('bcrypt');
const crypto = require('crypto');

const usersData = JSON.parse(
  fs.readFileSync(path.join(__dirname, '../database/users.json'), 'utf8')
);

const createUser = async (user) => {
  let newUser = usersData.find((x) => x.email === user.email);
  if (newUser) {
    const error = `The emais "${user.email}" is already registered`;
    return error;
  } else {
    const id = crypto.randomBytes(10).toString('hex');
    const salt = bcrypt.genSaltSync(10);
    user.password = bcrypt.hashSync(user.password, salt);
    newUser = {
      id,
      ...user,
      role: 'client',
      createdAt: new Date().toLocaleString('en-US', { timeZone: 'UTC' }),
    };
    fs.writeFileSync(
      path.join(__dirname, '../database/users.json'),
      JSON.stringify([...usersData, newUser], null, 2)
    );
    return newUser;
  }
};

const getUsers = async () => {
  return usersData;
};

const getUser = async (id) => {
  const user = usersData.find((x) => x.id === id);
  if (!user) {
    const error = `The user ID: "${id}" does not exists`;
    return error;
  }
  return user;
};

const updateUser = async (id, body) => {
  const userIndex = usersData.findIndex((x) => x.id === id);
  if (userIndex === -1) {
    const error = `The user ID: "${id}" does not exists`;
    return error;
  }
  if (body.password) {
    const salt = bcrypt.genSaltSync(10);
    body.password = bcrypt.hashSync(body.password, salt);
  }
  const updatedUser = { ...usersData[userIndex], ...body };
  usersData[userIndex] = updatedUser;
  fs.writeFileSync(
    path.join(__dirname, '../database/users.json'),
    JSON.stringify([...usersData], null, 2)
  );
  return updatedUser;
};

const deleteUser = (id) => {
  const userIndex = usersData.findIndex((x) => x.id === id);
  if (userIndex === -1) {
    const error = `The user ID: "${id}" does not exists`;
    return error;
  }
  usersData.splice(userIndex, 1);
  fs.writeFileSync(
    path.join(__dirname, '../database/users.json'),
    JSON.stringify([...usersData], null, 2)
  );
  return;
};

module.exports = {
  createUser,
  getUsers,
  getUser,
  updateUser,
  deleteUser,
};
