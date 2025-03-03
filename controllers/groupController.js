const groupModel = require('../models/groupModel');

async function createGroup(req, res) {
  const { name } = req.body;
  const group = await groupModel.createGroup(name);
  res.json({ group: group, message: 'Group Created' });
}

async function getUniqueGroupById(req, res) {
  const group = await groupModel.getGroupById(Number(req.params.id));
  res.json({ group: group, message: `Get Group ${req.params.id}` });
}

async function getAllGroups(req, res) {
  const group = await userModel.getAllGroups();
  res.json({ group: group, message: `All Groups` });
}

async function updateGroup(req, res) {
  const { name } = req.body;
  const group = await groupModel.updateGroup(Number(req.params.id), name);
  res.json({ group: group, message: 'Group Updated' });
}

async function deleteGroup(req, res) {
  const group = await groupModel.deleteGroup(Number(req.params.id));
  res.json({ group: group, message: `Delete Group ${req.params.id}` });
}

module.exports = {
  createGroup,
  getUniqueGroupById,
  getAllGroups,
  updateGroup,
  deleteGroup,
};
