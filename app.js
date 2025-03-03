const express = require('express');
const app = express();
const cors = require('cors');

const userRoute = require('./routes/userRoute');
const groupRoute = require('./routes/groupRoute');
const chatRoute = require('./routes/chatRoute');

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());

app.use('/', userRoute);
app.use('/', groupRoute);
app.use('/', chatRoute);

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log(`My first Express app - listening on port ${PORT}!`);
});
