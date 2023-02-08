// src/app.js
const express = require('express');
const validateActivities = require('./middlewares/validateActivities')
const app = express();
app.use(express.json())

app.post('/activities', validateActivities, (req, res) => {
  res.status(201).json({ "message": "Atividade cadastrada com sucesso!" });
});

module.exports = app;