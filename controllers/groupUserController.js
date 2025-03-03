const groupUserModel = require('../models/groupUserModel');

async function createGroupUser(req, res) {
  const groupUser = await groupUserModel.createGroupUser(
    Number(req.params.id),
    Number(req.params.groupId)
  );
  res.json({ groupUser: groupUser, message: 'Group User Created' });
}

async function getUniqueGroupUserById(req, res) {
  const groupUser = await groupUserModel.getGroupUserById(
    Number(req.params.id)
  );
  res.json({
    groupUser: groupUser,
    message: `Get Group User ${req.params.id}`,
  });
}

async function getAllGroupUsers(req, res) {
  const groupUser = await groupUserModel.getAllGroupUsers();
  res.json({ groupUser: groupUser, message: `All Groups Users` });
}

async function updateGroupUser(req, res) {
  const groupUser = await groupUserModel.updateGroupUser(
    Number(req.params.id),
    Number(req.params.groupId)
  );
  res.json({ groupUser: groupUser, message: 'Group User Updated' });
}

async function deleteGroupUser(req, res) {
  const groupUser = await groupUserModel.deleteGroupUser(Number(req.params.id));
  res.json({
    groupUser: groupUser,
    message: `Delete Group User ${req.params.id}`,
  });
}

module.exports = {
  createGroupUser,
  getUniqueGroupUserById,
  getAllGroupUsers,
  updateGroupUser,
  deleteGroupUser,
};
