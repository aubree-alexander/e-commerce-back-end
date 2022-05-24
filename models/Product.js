const { DataTypes } = require("sequelize/types");

var Product = sequelize.define("Product", {
    id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true,
        autoIncrement: true,
    },
    product_name: {
        type: DataTypes.STRING,
        allowNull: false
    },
    price: {
        type: DataTypes.DECIMAL,
        allowNull: false,
        //validates the value is a decimal - add here
    },
    stock: {
        type: DataTypes.INTEGER,
        allowNull: false,
        //set default value of 10 here
        //validates that the value is numeric here
    },
    category_id: {
        type: DataTypes.INTEGER,
        //references the category model's id here
    }, 
});