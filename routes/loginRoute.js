const { Router } = require('express');
const loginRouter = Router();
const loginController = require('../controllers/loginController');

loginRouter.post('/login', loginController.loginUser);
loginRouter.get('/protected', loginController.secureUser);
loginRouter.post('/logout', loginController.logoutUser);
module.exports = loginRouter;
