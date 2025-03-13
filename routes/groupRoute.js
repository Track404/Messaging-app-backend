const { Router } = require('express');
const groupRouter = Router();
const groupController = require('../controllers/groupController');
const pageValidation = require('../validators/pageValidation');
const validateRequest = require('../validators/validateRequest');

groupRouter.get('/group', groupController.getAllGroups);
groupRouter.get('/group/:id', groupController.getUniqueGroupById);
groupRouter.post(
  '/group',
  pageValidation.validateGroupName,
  validateRequest,
  groupController.createGroup
);
groupRouter.put('/group/:id', groupController.updateGroup);
groupRouter.delete('/group/:id', groupController.deleteGroup);

module.exports = groupRouter;
