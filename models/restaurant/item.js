module.exports = function(sequelize, DataTypes) {
    const Item = sequelize.define("Item", {
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
        },
        expirationDate: {
            type: DataTypes.DATE,
            allowNull: false,
        }
    });

    return Item;
};