module.exports = function(sequelize, DataTypes) {
  const Restaurant = sequelize.define("restaurant", {
    name: {
      type: DataTypes.STRING,
      allowNull: false
    },
    location: {
      type: DataTypes.STRING,
      allowNull: false
    },
    location: {
      userid: DataTypes.INTEGER,
      allowNull: false
    }
  });

  return Restaurant;
};
