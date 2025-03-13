const { Router } = require('express');
const userRouter = Router();
const userController = require('../controllers/userController');
const inputValidation = require('../validators/inputValidation');
const pageValidation = require('../validators/pageValidation');
const validateRequest = require('../validators/validateRequest');
userRouter.get('/user', userController.getAllUsers);
userRouter.get('/user/:id', userController.getUniqueUserById);
userRouter.get('/user/chats/:id', userController.getUniqueUserAllChats);
userRouter.post(
  '/user',
  inputValidation.validateRegister,
  validateRequest,
  userController.createUser
);
userRouter.post('/users', userController.createUsers);
userRouter.put(
  '/user/:id',
  pageValidation.validateUpdateUser,
  validateRequest,
  userController.updateUser
);
userRouter.delete('/user/:id', userController.deleteUser);
userRouter.delete('/user', userController.deleteAllUsers);

module.exports = userRouter;
