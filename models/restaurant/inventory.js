module.exports = function(sequelize, DataTypes) {
  const Inventory = sequelize.define("inventory", {
    itemsId: {
      type: DataTypes.INTEGER,
      references: "item",
      referencesKey: "id"
    }
  });

  return Inventory;
};
