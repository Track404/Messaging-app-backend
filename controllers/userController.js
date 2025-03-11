const userModel = require('../models/userModel');
const bcrypt = require('bcryptjs');

async function createUser(req, res) {
  const { name, email, password } = req.body;
  const hashedPassword = await bcrypt.hash(password, 10);
  const user = await userModel.createUser(name, email, hashedPassword);
  res.json({ user: user, message: 'User Created' });
}

async function getUniqueUserById(req, res) {
  const user = await userModel.getUserById(Number(req.params.id));
  res.json({ user: user, message: `Get User ${req.params.id}` });
}

async function getUniqueUserAllChats(req, res) {
  const user = await userModel.getUserAllChats(Number(req.params.id));
  res.json({ user: user, message: `Get User Chats ${req.params.id}` });
}

async function getAllUsers(req, res) {
  const user = await userModel.getAllUsers();
  res.json({ user: user, message: `All Users` });
}

async function updateUser(req, res) {
  const { username, email, password } = req.body;
  const user = await userModel.updateUser(
    Number(req.params.id),
    username,
    email,
    password
  );
  res.json({ user: user, message: 'User Updated' });
}

async function deleteUser(req, res) {
  const user = await userModel.deleteUser(Number(req.params.id));
  res.json({ user: user, message: `Delete User ${req.params.id}` });
}

module.exports = {
  createUser,
  getUniqueUserById,
  getUniqueUserAllChats,
  getAllUsers,
  updateUser,
  deleteUser,
};
