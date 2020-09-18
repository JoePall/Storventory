module.exports = function(sequelize, DataTypes) {
  const Order = sequelize.define("order", {
    number: {
      type: DataTypes.INTEGER,
      allowNull: false
    }
  });

  return Order;
};
