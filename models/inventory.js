module.exports = function(sequelize, DataTypes) {
  const Inventory = sequelize.define("Inventory", {
    itemsId: {
      type: DataTypes.INTEGER
    }
  });

  return Inventory;
};
