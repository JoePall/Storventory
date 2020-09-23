module.exports = function(sequelize, DataTypes) {
  const InventoryItem = sequelize.define("InventoryItem", {
    name: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        len: [1, 80]
      }
    },
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
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        len: [1, 15]
      }
    },
    restaurantid: {
      type: DataTypes.INTEGER,
      allowNull: false
    }
  });

  return InventoryItem;
};
