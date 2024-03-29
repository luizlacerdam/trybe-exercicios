const teams = require('../teams');

const existingId = (req, res, next) => {
    const id = Number(req.params.id);
    if (teams.some((team) => team.id === id)) {
      return next();
    } 
      res.sendStatus(404).json({ message: 'Id não encontrado.' });
  };

  module.exports = existingId;