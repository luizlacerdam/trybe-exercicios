const express = require('express');
const patient = require('./controllers/patientController');
const plan = require('./controllers/plansCotroller');

const app = express();
app.use(express.json());

app.get('/patients/sugeries', patient.getAllPatientsSurgeries);
app.get('/patients/:id', patient.getById);
app.get('/patients', patient.getAll);

app.get('/plans/:id', plan.getAllPlansById);
module.exports = app;