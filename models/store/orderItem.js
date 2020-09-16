module.exports = function(sequelize, DataTypes) {
  const orderItem = sequelize.define("orderItem", {
    orderItem: {
      name: {
        type: DataTypes.STRING,
        allowNull: false
      },
      quantity: {
        type: DataTypes.INTEGER,
        allowNull: false
      },
      stockNumber: {
        type: DataTypes.STRING,
        allowNull: false
      },
      expirationDate: {
        type: DataTypes.STRING,
        allowNull: false
      },
      cost: {
        type: DataTypes.STRING,
        allowNull: false
      }
    }
  });

  return orderItem;
};
