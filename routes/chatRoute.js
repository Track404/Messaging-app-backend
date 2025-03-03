const { Router } = require('express');
const chatRouter = Router();
const chatController = require('../controllers/chatController');

chatRouter.get('/chat', chatController.getAllChats);
chatRouter.get('/chat/:id', chatController.getUniqueChatById);
chatRouter.post('/chat', chatController.createChat);
chatRouter.put('/chat/:id', chatController.updateChat);
chatRouter.delete('/chat/:id', chatController.deleteChat);

module.exports = chatRouter;
