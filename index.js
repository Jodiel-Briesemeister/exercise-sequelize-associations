const bodyParser = require('body-parser');

const express = require('express');
const patientsController = require('./controllers/patients');
const plansController = require('./controllers/plans')
const surgeriesController = require('./controllers/surgeries');

const app = express();
app.use(express.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.get('/all', patientsController.getPatientsAndPlans);
app.get('/surgeries', patientsController.getAllPatientsSurgeries);
app.get('/plans/patients/:id', plansController.getPlanPatientsById);
app.post('/patient', patientsController.addNewPatient);
app.get('/surgeries/noname', patientsController.getAllPatientsSurgeriesWithoutDoctor);
app.get('/surgeries/:name', surgeriesController.getSurgeriesByDoctorName);

const PORT = 3000;

app.listen(PORT, () => {
  console.log(`Port: ${PORT}`);
});