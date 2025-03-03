const userModel = require('../models/userModel');

async function createUser(req, res) {
  const { name, email, password } = req.body;
  const user = await userModel.createUser(name, email, password);
  res.json({ user: user, message: 'User Created' });
}

async function getUniqueUserById(req, res) {
  const user = await userModel.getUserById(Number(req.params.id));
  res.json({ user: user, message: `Get User ${req.params.id}` });
}

async function getAllUsers(req, res) {
  const user = await userModel.getAllUsers();
  res.json({ user: user, message: `All Users` });
}

async function updateUser(req, res) {
  const { name, email, password } = req.body;
  const user = await userModel.createUser(
    Number(req.params.id),
    name,
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
  getAllUsers,
  updateUser,
  deleteUser,
};
