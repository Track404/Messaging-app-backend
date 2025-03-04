const express = require('express');
const app = express();
const passport = require('./config/passport');
const cors = require('cors');

const userRoute = require('./routes/userRoute');
const groupRoute = require('./routes/groupRoute');
const chatRoute = require('./routes/chatRoute');
const groupUserRoute = require('./routes/groupUserRoute');
const messageRoute = require('./routes/messageRoute');
const loginRoute = require('./routes/loginRoute');

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());
app.use(passport.initialize());

app.use('/', userRoute);
app.use('/', groupRoute);
app.use('/', chatRoute);
app.use('/', groupUserRoute);
app.use('/', messageRoute);
app.use('/', loginRoute);

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log(`My first Express app - listening on port ${PORT}!`);
});
