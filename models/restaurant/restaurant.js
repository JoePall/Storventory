module.exports = function(sequelize, DataTypes) {
  const restaurant = sequelize.define("restaurant", {
    name: {
      type: DataTypes.STRING,
      references: "name",
      allowNull: false
    },
    location: {
      type: DataTypes.STRING,
      references: "location",
      allowNull: false
    }
  });
  return restaurant;
};
