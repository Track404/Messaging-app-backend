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
groupUserRouter.put('/group/:groupId', groupUserController.updateGroupUser);
groupUserRouter.delete('/group/:id', groupUserController.deleteGroupUser);

module.exports = groupUserRouter;
