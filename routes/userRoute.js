const { Router } = require('express');
const userRouter = Router();
const userController = require('../controllers/userController');
const inputValidation = require('../validators/inputValidation');

userRouter.get('/user', userController.getAllUsers);
userRouter.get('/user/:id', userController.getUniqueUserById);
userRouter.post(
  '/user',
  inputValidation.validateRegister,
  userController.createUser
);
userRouter.put('/user/:id', userController.updateUser);
userRouter.delete('/user/:id', userController.deleteUser);

module.exports = userRouter;
