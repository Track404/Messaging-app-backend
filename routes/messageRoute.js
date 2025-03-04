const { Router } = require('express');
const messageRouter = Router();
const messageController = require('../controllers/messageController');

messageRouter.get('/message', messageController.getAllMessage);
messageRouter.get('/message/:id', messageController.getUniqueMessageById);
messageRouter.post(
  '/messageGroup/:groupId/:id',
  messageController.createMessage
);
messageRouter.post('/messageChat/:chatId/:id', messageController.createMessage);
messageRouter.put('/message/:id', messageController.updateMessage);
messageRouter.delete('/message/:id', messageController.deleteMessage);

module.exports = messageRouter;
