module.exports = (sequelize, _DataTypes) => {
  const Patient_surgeries = sequelize.define('Patient_surgeries', 
    {},
    { timestamps: false }
  );

  Patient_surgeries.associate = (models) => {
    models.Surgeries.belongsToMany(models.Patients, { // Tabela Surgeries 1:N Patients_surgeries
      as: 'patients',
      through: Patient_surgeries,
      foreignKey: 'surgery_id',
      otherKey: 'patient_id',
    });
    models.Patients.belongsToMany(models.Surgeries, { // Tabela Patients 1:N Patients_surgeries
      as: 'surgeries',
      through: Patient_surgeries,
      foreignKey: 'patient_id',
      otherKey: 'surgery_id',
    });
  };

  return Patient_surgeries;
};
