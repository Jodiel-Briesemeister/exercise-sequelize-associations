const { Patients, Plans, Surgeries } = require('../models');

const getPatientsAndPlans = async (_req, res) => {
  try {
    const result = await Patients.findAll({
      include: { model: Plans, as: 'plans' },
    });

    return res.status(200).json(result);
  } catch (e) {
    console.log(e.message);
    res.status(500).json({ message: 'Ocorreu um erro' });
  };
};

const getAllPatientsSurgeries = async (_req, res) => {
  try {
    const result = await Patients.findAll({
      include: { model: Surgeries, as: 'surgeries', through: { attributes: [] } }
    })
    return res.status(200).json(result);
  } catch (e) {
    console.log(e.message);
    res.status(500).json({ message: 'Ocorreu um erro' });
  }
}

const addNewPatient = async (req, res) => {
  try {
    const { fullName, plan_id } = req.body;
    const result = await Patients.create({ fullName, plan_id })
    return res.status(200).json(result);
  } catch (e) {
    console.log(e.message);
    res.status(500).json({ message: 'Ocorreu um erro' });
  }
}

const getAllPatientsSurgeriesWithoutDoctor = async (_req, res) => {
  try {
    const result = await Patients.findAll({
      include: { 
        model: Surgeries, 
        as: 'surgeries', 
        attributes: { exclude: ['doctor'] },
        through: { attributes: [] },
      }
    })
    return res.status(200).json(result);
  } catch (e) {
    console.log(e.message);
    res.status(500).json({ message: 'Ocorreu um erro' });
  }
}

module.exports = {
  getPatientsAndPlans,
  getAllPatientsSurgeries,
  addNewPatient,
  getAllPatientsSurgeriesWithoutDoctor,
}