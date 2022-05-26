const { Model, DataTypes } = require('sequelize');

const sequelize = require('../config/connection');
//this is a through/junction table. ties product and tag tables together. when we use this is when 2 different models have a many to many relationship. 
//think of hashtags. hashtags can have many images/products they're tied to and products can have a bunch of hashtags.
//this table maps relationships to tables that have many to many.
class ProductTag extends Model {}

ProductTag.init(
  {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
      product_id: {
        type: DataTypes.INTEGER,
        references: {model: 'product', key: 'id'}
      },
      tag_id: {
        type: DataTypes.INTEGER,
        references: {model: 'tag', key: 'id'}
      }
    
  },
  {
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: 'product_tag',
  }
);

module.exports = ProductTag;
