module.exports = function(sequelize, DataTypes) {
  const InventoryItem = sequelize.define("inventoryItem", {
    quantity: {
      type: DataTypes.INTEGER,
      allowNull: false,
      validate: {
        len: [1, 10]
      }
    },
    stockAmount: {
      type: DataTypes.INTEGER,
      allowNull: false,
      validate: {
        len: [1, 10]
      }
    },
    stockNumber: {
      type: DataTypes.INTEGER,
      allowNull: false,
      validate: {
        len: [1, 10]
      }
    }
  });

  return InventoryItem;
};
