module.exports = function(sequelize, DataTypes) {
  const inventory = sequelize.define("inventory", {
    inventory: {
      itemsId: {
        type: DataTypes.INTEGER,
        references: "item",
        referencesKey: "id"
      }
    }
  });

  return inventory;
};
