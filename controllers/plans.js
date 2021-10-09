const { Patients, Plans } = require('../models');

const getPlanPatientsById = async (req, res) => {
  try {
    const { id } = req.params;
    const result = await Plans.findAll({
      where: { plan_id: id },
      include: [{ model: Patients, as: 'patients' }]
    })
    return res.status(200).json(result);
  } catch (e) {
    console.log(e.message);
    res.status(500).json({ message: 'Ocorreu um erro' });
  }
}

module.exports = {
  getPlanPatientsById,
}