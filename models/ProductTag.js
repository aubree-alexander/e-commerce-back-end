const { DataTypes } = require("sequelize/types");

var ProductTag= sequelize.define("ProductTag", {
    id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true,
        autoIncrement: true,
    },
    product_id: {
        type: DataTypes.INTEGER,
        //references product model's id here
    },
    tag_id: {
        type: DataTypes.INTEGER,
        //references tag model's id here
    }
});