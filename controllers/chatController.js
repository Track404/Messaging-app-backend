const chatModel = require('../models/chatModel');

async function createChat(req, res) {
  const { firstUserId, secondUserId } = req.body;
  const chat = await chatModel.createChat(firstUserId, secondUserId);
  res.json({ chat: chat, message: 'Chat Created' });
}

async function getUniqueChatById(req, res) {
  const chat = await chatModel.getChatById(Number(req.params.id));
  res.json({ chat: chat, message: `Get Chat ${req.params.id}` });
}

async function getAllChats(req, res) {
  const chats = await chatModel.getAllChats();
  res.json({ chat: chats, message: `All Chats` });
}

async function updateChat(req, res) {
  const { firstUserId, secondUserId } = req.body;
  const chat = await groupModel.updateGroup(
    Number(req.params.id),
    firstUserId,
    secondUserId
  );
  res.json({ chat: chat, message: 'Chat Updated' });
}

async function deleteChat(req, res) {
  const chat = await chatModel.deleteChat(Number(req.params.id));
  res.json({ chat: chat, message: `Delete Chat ${req.params.id}` });
}

module.exports = {
  createChat,
  getUniqueChatById,
  getAllChats,
  updateChat,
  deleteChat,
};
