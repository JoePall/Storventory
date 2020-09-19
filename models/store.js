module.exports = function(sequelize, DataTypes) {
  const Store = sequelize.define("Store", {
    name: {
      type: DataTypes.STRING,
      allowNull: false
    },
    location: {
      type: DataTypes.STRING,
      allowNull: false
    }
  });

  return Store;
};
