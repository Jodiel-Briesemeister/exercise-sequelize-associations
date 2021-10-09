module.exports = (sequelize, DataTypes) => {
  const Plans = sequelize.define('Plans', {
    planId: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
    coverage: DataTypes.STRING(50),
    price: DataTypes.DOUBLE,
  },
  {
    timestamps: false,
    tableName: 'Plans',
    underscored: true,
  });

  Plans.associate = (models) => {
    Plans.hasMany(models.Patients,{ foreignKey: 'plan_id', as: 'patients' });
  };

  return Plans;
};