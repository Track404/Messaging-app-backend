const prisma = require('../prisma/client');

async function createChat(firstUserId, secondUserId) {
  console.log(`Model${firstUserId},${secondUserId}`);
  const chat = await prisma.chat.create({
    data: {
      users1Id: firstUserId,
      users2Id: secondUserId,
    },
  });
  return chat;
}

async function getChatById(id) {
  const chat = await prisma.chat.findUnique({
    where: {
      id: id,
    },
    select: {
      users1: {
        select: {
          id: true,
          name: true,
        },
      },
      users2: {
        select: {
          id: true,
          name: true,
        },
      },
      messages: {
        orderBy: {
          sentAt: 'desc',
        },
      },
    },
  });
  return chat;
}

async function getAllChats() {
  const chats = await prisma.chat.findMany();
  return chats;
}

async function updateChat(id, firstUserId, secondUserId) {
  const chat = await prisma.chat.update({
    where: {
      id: id,
    },
    data: {
      users1Id: firstUserId,
      users2Id: secondUserId,
    },
  });
  return chat;
}

async function deleteChat(id) {
  const chat = await prisma.chat.delete({
    where: {
      id: id,
    },
  });
  return chat;
}

module.exports = {
  createChat,
  getChatById,
  getAllChats,
  updateChat,
  deleteChat,
};
