// src/app.js
const express = require('express');
const validateTeam = require('./middlewares/validateTeam');
const existingId = require('./middlewares/existingId');
const teams = require('./teams');

const app = express();
app.use(express.json());

  app.get('/teams', (req, res) => res.status(200).json({ teams }));

  app.post('/teams', validateTeam, (req, res) => {
    const newTeam = { ...req.body };
    teams.push(newTeam);
    res.status(201).json({ team: newTeam });
  });
  app.put('/teams/:id', existingId, validateTeam, (req, res) => {
    const { id } = req.params;
    const { name, initials } = req.body;
    const updateTeam = teams.find((team) => team.id === Number(id));
    updateTeam.name = name;
    updateTeam.initials = initials;
    res.status(200).json({ updateTeam });
  });
  app.get('/teams/:id', existingId, (req, res) => {
    const { id } = req.params;
    const teamExiste = teams.find((team) => team.id === Number(id));  
    res.status(200).json({ teamExiste });
  });

  app.delete('/teams/:id', existingId, (req, res) => {
    const { id } = req.params;
    const arrayPosition = teams.findIndex((team) => team.id === Number(id));
    teams.splice(arrayPosition, 1);
    res.status(200).end();
  });
module.exports = app;