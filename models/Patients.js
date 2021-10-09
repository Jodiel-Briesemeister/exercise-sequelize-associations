module.exports = (sequelize, DataTypes) => {
  const Patients = sequelize.define('Patients', {
    patientId: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
    fullName: DataTypes.STRING(50),
    plan_id: { type: DataTypes.INTEGER, foreignKey: true },
  },
  {
    timestamps: false,
    tableName: 'Patients',
    underscored: true,
  });

  Patients.associate = (models) => {
    Patients.belongsTo(models.Plans, { foreignKey: 'plan_id', as: 'plans' });
  };

  return Patients;
};