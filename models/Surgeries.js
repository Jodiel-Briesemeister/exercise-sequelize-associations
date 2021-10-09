module.exports = (sequelize, DataTypes) => {
  const Surgeries = sequelize.define('Surgeries', {
    surgeryId: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
    specialty: DataTypes.STRING(50),
    doctor: DataTypes.STRING(50),
  },
  {
    timestamps: false,
    tableName: 'Surgeries',
    underscored: true,
  });

  return Surgeries;
};