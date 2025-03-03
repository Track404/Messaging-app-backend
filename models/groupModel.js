const prisma = require('../prisma/client');

async function createGroup(name) {
  const group = await prisma.group.create({
    data: {
      name: name,
    },
  });
  return group;
}

async function getGroupById(id) {
  const group = await prisma.group.findUnique({
    where: {
      id: id,
    },
  });
  return group;
}

async function getAllGroups() {
  const groups = await prisma.group.findMany();
  return groups;
}

async function updateGroup(id, name) {
  const group = await prisma.group.update({
    where: {
      id: id,
    },
    data: {
      name: name,
    },
  });
  return group;
}

async function deleteGroup(id) {
  const group = await prisma.group.delete({
    where: {
      id: id,
    },
  });
  return group;
}

module.exports = {
  createGroup,
  getGroupById,
  getAllGroups,
  updateGroup,
  deleteGroup,
};
