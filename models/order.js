module.exports = function(sequelize, DataTypes) {
  const Order = sequelize.define("Order", {
    number: {
      type: DataTypes.INTEGER,
      allowNull: false
    }
  });

  return Order;
};
