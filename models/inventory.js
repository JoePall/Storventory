module.exports = function(sequelize, DataTypes) {
  const Inventory = sequelize.define("Inventory", {
    itemsId: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        len: [1, 140]
      }
    }
  });

  return Inventory;
};
