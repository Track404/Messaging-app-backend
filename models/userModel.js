const prisma = require('../prisma/client');

async function createUser(name, email, password) {
  const user = await prisma.user.create({
    data: {
      name: name,
      email: email,
      password: password,
    },
  });
  return user;
}

async function getUserById(id) {
  const user = await prisma.user.findUnique({
    where: {
      id: id,
    },
  });
  return user;
}

async function getUserByEmail(email) {
  const user = await prisma.user.findUnique({
    where: {
      email: email,
    },
  });
  return user;
}

async function getUserAllChats(id) {
  const userChats = await prisma.user.findUnique({
    where: {
      id: id,
    },
    select: {
      chats1: {
        include: {
          users2: {
            select: {
              name: true,
            },
          },
          messages: {
            orderBy: {
              sentAt: 'desc',
            },
            take: 1,
          },
        },
      },
      chats2: {
        include: {
          users1: {
            select: {
              name: true,
            },
          },
          messages: {
            orderBy: {
              sentAt: 'desc',
            },
            take: 1,
          },
        },
      },
      groups: {
        include: {
          group: {
            select: {
              name: true,
              messages: {
                orderBy: {
                  sentAt: 'desc',
                },
                take: 1,
              },
            },
          },
        },
      },
    },
  });

  return userChats;
}

async function getAllUsers() {
  const user = await prisma.user.findMany();
  return user;
}

async function updateUser(id, name, email, password) {
  const user = await prisma.user.update({
    where: {
      id: id,
    },
    data: {
      name: name,
      email: email,
      password: password,
    },
  });
  return user;
}

async function deleteUser(id) {
  const user = await prisma.user.delete({
    where: {
      id: id,
    },
  });
  return user;
}

module.exports = {
  createUser,
  getUserById,
  getUserByEmail,
  getUserAllChats,
  getAllUsers,
  updateUser,
  deleteUser,
};
