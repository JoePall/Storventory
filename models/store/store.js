// Store, Location

module.exports = function(sequelize, DataTypes) {
  const store = sequelize.define("Inventory", {
    name: {
      type: DataTypes.STRING,
      allowNull: false
    },
    location: {
      type: DataTypes.STRING,
      allowNull: false
    }
  });

  return store;
};
