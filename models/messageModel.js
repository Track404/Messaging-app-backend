const prisma = require('../prisma/client');

async function createMessage(content, userId, chatId = null, groupId = null) {
  const message = await prisma.message.create({
    data: {
      content: content,
      userId: userId,
      chatId: chatId,
      groupId: groupId,
    },
  });
  return message;
}

async function getMessageById(id) {
  const message = await prisma.message.findUnique({
    where: {
      id: id,
    },
  });
  return message;
}

async function getAllMessage() {
  const messages = await prisma.message.findMany();
  return messages;
}

async function updateMessage(id, content) {
  const message = await prisma.message.update({
    where: {
      id: id,
    },
    data: {
      content: content,
    },
  });
  return message;
}

async function deleteMessage(id) {
  const message = await prisma.message.delete({
    where: {
      id: id,
    },
  });
  return message;
}

module.exports = {
  createMessage,
  getMessageById,
  getAllMessage,
  updateMessage,
  deleteMessage,
};
