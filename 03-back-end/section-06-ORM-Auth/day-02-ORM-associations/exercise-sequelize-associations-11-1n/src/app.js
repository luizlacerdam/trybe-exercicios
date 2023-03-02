const bodyParser = require('body-parser');
const express = require('express');

const app = express();

app.use(express.json());
app.use(bodyParser.urlencoded({ extended: false }));

const { getAccountById, getAccountByIdLazy } = require('./controllers/account');

app.get('/accounts/:id', getAccountById);
app.get('/accounts-v2/:id', getAccountByIdLazy);

module.exports = app;
