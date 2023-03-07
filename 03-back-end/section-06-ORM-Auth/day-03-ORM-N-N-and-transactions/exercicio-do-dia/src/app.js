const express = require('express');
const patient = require('./controllers/patientController');
const plan = require('./controllers/plansCotroller');
const surgeries = require('./controllers/surgeyController');

const app = express();
app.use(express.json());

app.get('/patients/sugeries', patient.getAllPatientsSurgeries);
app.get('/patients/sugeries!doctor', patient.getAllPatientsAndSurgeriesNoDoctor);

app.get('/patients/:id', patient.getById);
app.get('/patients', patient.getAll);
app.post('/patients', patient.createPatient);
app.get('/surgeries/:name', surgeries.getSurgeriesAllByDoctorName);

app.get('/plans/:id', plan.getAllPlansById);
module.exports = app;