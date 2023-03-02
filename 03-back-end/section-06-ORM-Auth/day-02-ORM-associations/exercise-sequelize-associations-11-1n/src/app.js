const bodyParser = require('body-parser');
const express = require('express');

const app = express();

app.use(express.json());
app.use(bodyParser.urlencoded({ extended: false }));

const { getAccountById } = require('./controllers/account');

app.get('/accounts/:id', getAccountById);

module.exports = app;
