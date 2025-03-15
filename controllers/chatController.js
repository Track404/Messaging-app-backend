const chatModel = require('../models/chatModel');

async function createChat(req, res) {
  const { firstUserId, secondUserId } = req.body;

  try {
    const chat = await chatModel.createChat(
      Number(firstUserId),
      Number(secondUserId)
    );

    res.json({ chat: chat, message: 'Chat Created' });
  } catch (error) {
    // Check if the error is due to a unique constraint violation (P2002)
    if (error.code === 'P2002') {
      return res
        .status(400)
        .json({ message: 'Chat already exists between these users' });
    }

    // Handle other errors
    console.error('Unexpected error:', error);
    res.status(500).json({ message: 'Something went wrong' });
  }
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
  const chat = await chatModel.updateChat(
    Number(req.params.id),
    Number(firstUserId),
    Number(secondUserId)
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
