module.exports = function(sequelize, DataTypes) {
  const Inventory = sequelize.define("Inventory", {
    Items: {
      ItemsId: {
        type: DataTypes.INTEGER,
        references: "item",
        referencesKey: "id"
      }
    }
  });

  return Inventory;
};
