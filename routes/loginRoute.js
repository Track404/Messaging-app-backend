const { Router } = require('express');
const loginRouter = Router();
const loginController = require('../controllers/loginController');
const inputValidation = require('../validators/inputValidation');
const validateRequest = require('../validators/validateRequest');
loginRouter.post(
  '/login',
  inputValidation.validateLogin,
  validateRequest,
  loginController.loginUser
);
loginRouter.get('/protected', loginController.secureUser);
loginRouter.post('/logout', loginController.logoutUser);
module.exports = loginRouter;
