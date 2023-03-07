const express = require('express');
const patient = require('./controllers/patientController');

const app = express();
app.use(express.json());

app.get('/patients/sugeries', patient.getAllPatientsSurgeries);
app.get('/patients/:id', patient.getById);
app.get('/patients', patient.getAll);
module.exports = app;