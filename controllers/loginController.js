const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');
const passport = require('../config/passport');
const userModel = require('../models/userModel');
const tokenBlacklist = new Set();
require('dotenv').config();

async function loginUser(req, res) {
  const { email, password } = req.body;

  try {
    const user = await userModel.getUserByEmail(email);

    if (!user || !(await bcrypt.compare(password, user.password))) {
      return res.status(401).json({ message: 'Invalid credentials' });
    }

    const token = jwt.sign(
      {
        id: user.id,
        email: user.email,
      },
      process.env.JWT_SECRET,
      {
        expiresIn: '2h',
      }
    );
    res.json({ token });
  } catch (err) {
    res.status(500).json({ message: 'Error logging in', error: err });
  }
}

async function secureUser(req, res) {
  passport.authenticate('jwt', { session: false }, (err, user, info) => {
    if (err || !user) {
      return res.status(401).json({ message: 'Unauthorized', error: info });
    }
    const token = req.headers.authorization?.split(' ')[1];
    if (tokenBlacklist.has(token)) {
      return res
        .status(401)
        .json({ message: 'Token has been invalidated. Please log in again.' });
    }
    req.user = user;
    res.json({
      message: 'Access granted',
      user: { id: req.user.id, name: req.user.name, email: req.user.email },
    });
  })(req, res);
}

async function logoutUser(req, res) {
  const token = req.headers.authorization?.split(' ')[1];

  if (!token) {
    return res.status(400).json({ message: 'No token provided' });
  }

  tokenBlacklist.add(token); // Add token to the blacklist
  res.json({ message: 'Logged out successfully' });
}

module.exports = {
  loginUser,
  secureUser,
  logoutUser,
};
