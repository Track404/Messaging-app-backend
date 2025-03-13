const userModel = require('../models/userModel');
const bcrypt = require('bcryptjs');

async function createUser(req, res) {
  const { name, email, password } = req.body;
  const hashedPassword = await bcrypt.hash(password, 10);
  const user = await userModel.createUser(name, email, hashedPassword);
  res.json({ user: user, message: 'User Created' });
}
async function createUsers(req, res) {
  const usersData = req.body.users;
  const hashedUsers = [];

  // Hash the password for each user
  for (const user of usersData) {
    const hashedPassword = await bcrypt.hash(user.password, 10);
    hashedUsers.push({
      name: user.name,
      email: user.email,
      password: hashedPassword,
    });
  }

  const createdUsers = await userModel.createUsers(hashedUsers); // Assuming `createUsers` accepts an array of users

  res.json({
    users: createdUsers,
    message: `${createdUsers.length} Users Created Successfully`,
  });
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
  const { name, email } = req.body;
  const user = await userModel.updateUser(Number(req.params.id), name, email);
  res.json({ user: user, message: 'User Updated' });
}

async function deleteUser(req, res) {
  const user = await userModel.deleteUser(Number(req.params.id));
  res.json({ user: user, message: `Delete User ${req.params.id}` });
}

async function deleteAllUsers(req, res) {
  const user = await userModel.deleteAllUsers(Number(req.params.id));
  res.json({
    user: user,
    message: `${user.count} users deleted successfully`,
  });
}

module.exports = {
  createUser,
  createUsers,
  getUniqueUserById,
  getUniqueUserAllChats,
  getAllUsers,
  updateUser,
  deleteUser,
  deleteAllUsers,
};
