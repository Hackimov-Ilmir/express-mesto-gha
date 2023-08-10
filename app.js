const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');

const User = require('./models/users');

const app = express();

app.use(bodyParser.json());

const port = 3000;

mongoose.connect('mongodb://127.0.0.1:27017/mestodb', {
  useNewUrlParser: true,
});

app.post('/users', (req, res) => {
  User.create({ ...req.body })
    .then((user) => {
      res.status(201).send(user);
    })
    .catch((err) => {
      console.log(err);
      res.status(500).send('Server Error');
    });
});

app.get('/', (req, res) => {
  res.send('test123');
});

app.listen(port, console.log(`listen ${port}`));
