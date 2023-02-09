// src/app.js
const express = require('express');
const validateName = require('./middlewares/validateName');
const validatePrice = require('./middlewares/validatePrice');
const validateDesc = require('./middlewares/validateDesc');
const validateCreatedAt = require('./middlewares/validateCreatedAt')
const validateRating = require('./middlewares/validateRating')
const app = express();
app.use(express.json())

app.post('/activities', validateName, validatePrice, validateDesc, validateCreatedAt, validateRating, (req, res) => {
  res.status(201).json({ "message": "Atividade cadastrada com sucesso!" });
});

module.exports = app;