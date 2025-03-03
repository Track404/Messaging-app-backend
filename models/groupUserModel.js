const prisma = require('../prisma/client');

async function createGroupUser(userId, groupId) {
  const groupUser = await prisma.groupUser.create({
    data: {
      userId: userId,
      groupId: groupId,
    },
  });
  return groupUser;
}

async function getGroupUserById(id) {
  const groupUser = await prisma.groupUser.findUnique({
    where: {
      id: id,
    },
  });
  return groupUser;
}

async function getAllGroupUsers() {
  const groupUsers = await prisma.groupUser.findMany();
  return groupUsers;
}

async function updateGroupUser(id, groupId) {
  const groupUser = await prisma.groupUser.update({
    where: {
      id: id,
    },
    data: {
      groupId: groupId,
    },
  });
  return groupUser;
}

async function deleteGroupUser(id) {
  const groupUser = await prisma.groupUser.delete({
    where: {
      id: id,
    },
  });
  return groupUser;
}

module.exports = {
  createGroupUser,
  getGroupUserById,
  getAllGroupUsers,
  updateGroupUser,
  deleteGroupUser,
};
