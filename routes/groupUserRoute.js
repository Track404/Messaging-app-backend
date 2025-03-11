const { Router } = require('express');
const groupUserRouter = Router();
const groupUserController = require('../controllers/groupUserController');

groupUserRouter.get('/groupUser', groupUserController.getAllGroupUsers);
groupUserRouter.get(
  '/groupUser/:id',
  groupUserController.getUniqueGroupUserById
);
groupUserRouter.post(
  '/groupUser/:groupId/:id',
  groupUserController.createGroupUser
);
groupUserRouter.post('/groupUsers', groupUserController.createManyGroupUsers);
groupUserRouter.put(
  '/groupUser/:groupId/:id',
  groupUserController.updateGroupUser
);
groupUserRouter.delete('/groupUser/:id', groupUserController.deleteGroupUser);

module.exports = groupUserRouter;
