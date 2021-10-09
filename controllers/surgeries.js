const { Surgeries, Patients } = require('../models');

const getSurgeriesByDoctorName = async (req, res) => {
  try {
    const { name } = req.params;
    const result = await Surgeries.findAll({
      where: { doctor: name },
      include: { 
        model: Patients, 
        as: 'patients', 
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
  getSurgeriesByDoctorName,
}