const { response } = require('express');
const messageModel = require('../models/messageModel');

async function createMessage(req, res) {
  const { content } = req.body;
  const message = await messageModel.createMessage(
    content,
    Number(req.params.id),
    Number(req.params.chatId),
    Number(req.params.groupId)
  );
  res.json({ response: message, message: 'Message Created' });
}

async function getUniqueMessageById(req, res) {
  const message = await messageModel.getMessageById(Number(req.params.id));
  res.json({ response: message, message: `Get Message ${req.params.id}` });
}

async function getAllMessage(req, res) {
  const messages = await messageModel.getAllMessage();
  res.json({ response: messages, message: `All Messages` });
}

async function updateMessage(req, res) {
  const { content } = req.body;
  const message = await messageModel.updateMessage(
    Number(req.params.id),
    content
  );
  res.json({ response: message, message: 'Message Updated' });
}

async function deleteMessage(req, res) {
  const message = await messageModel.deleteMessage(Number(req.params.id));
  res.json({ response: message, message: `Delete Message ${req.params.id}` });
}

module.exports = {
  createMessage,
  getUniqueMessageById,
  getAllMessage,
  updateMessage,
  deleteMessage,
};
