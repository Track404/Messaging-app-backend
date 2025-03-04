const { Router } = require('express');
const loginRouter = Router();
const loginController = require('../controllers/loginController');

loginRouter.post('/login', loginController.loginUser);
loginRouter.get('/protected', loginController.secureUser);

module.exports = loginRouter;
