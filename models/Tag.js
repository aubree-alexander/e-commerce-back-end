var Tag = sequelize.define("Tag", {
    id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true,
        autoIncrement: true,
    },
    tag_name: {
        type: DataTypes.STRING,
    }
});