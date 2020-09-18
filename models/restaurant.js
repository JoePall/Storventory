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
    userid: {
      type: DataTypes.INTEGER,
      allowNull: false
    }
  });

  return Restaurant;
};
