const { Router } = require('express');
const groupRouter = Router();
const groupController = require('../controllers/groupController');

groupRouter.get('/group', groupController.getAllGroups);
groupRouter.get('/group/:id', groupController.getAllGroups);
groupRouter.post('/group', groupController.createGroup);
groupRouter.put('/group/:id', groupController.updateGroup);
groupRouter.delete('/group/:id', groupController.deleteGroup);

module.exports = groupRouter;
