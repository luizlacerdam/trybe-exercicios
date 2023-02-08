// src/app.js
const express = require('express');

const app = express();
    app.use(express.json());
    const teams = [
        {
        id: 1,
        name: 'São Paulo Futebol Clube',
        initials: 'SPF',
        },
        {
        id: 2,
        name: 'Clube Atlético Mineiro',
        initials: 'CAM',
        },
    ];

  const existingId = (req, res, next) => {
    const id = Number(req.params.id);
    if (teams.some((team) => team.id === id)) {
      return next();
    } 
      res.sendStatus(404);
  };

  app.get('/teams', (req, res) => res.status(200).json({ teams }));

  app.post('/teams', (req, res) => {
    const newTeam = { ...req.body };
    teams.push(newTeam);
  
    res.status(201).json({ team: newTeam });
  });
  app.put('/teams/:id', existingId, (req, res) => {
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