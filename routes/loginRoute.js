const { Router } = require('express');
const loginRouter = Router();
const loginController = require('../controllers/loginController');
const inputValidation = require('../validators/inputValidation');

loginRouter.post(
  '/login',
  inputValidation.validateLogin,
  loginController.loginUser
);
loginRouter.get('/protected', loginController.secureUser);
loginRouter.post('/logout', loginController.logoutUser);
module.exports = loginRouter;
