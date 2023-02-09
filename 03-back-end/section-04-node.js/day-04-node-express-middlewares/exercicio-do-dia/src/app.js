// src/app.js
const express = require('express');
const validateName = require('./middlewares/validateName');
const validatePrice = require('./middlewares/validatePrice');
const validateDesc = require('./middlewares/validateDesc');
const validateCreatedAt = require('./middlewares/validateCreatedAt')
const validateRating = require('./middlewares/validateRating')
const generateToken = require('./utils/generateToken')
const validateSignup = require('./middlewares/validateSignup')
const auth = require('./middlewares/auth')
const app = express();
app.use(express.json())

app.post('/activities', auth, validateName, validatePrice, validateDesc, validateCreatedAt, validateRating, (req, res) => {
  res.status(201).json({ "message": "Atividade cadastrada com sucesso!" });
});

app.post('/signup', validateSignup, (req, res) => {
  res.status(200).json({ token: generateToken() });
});

module.exports = app;