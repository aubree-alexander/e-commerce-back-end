//page to solidify associations between tables

// import models
const Product = require('./Product');
const Category = require('./Category');
const Tag = require('./Tag');
const ProductTag = require('./ProductTag');

//one to many relationship between product and category
Product.belongsTo(Category, {foreignKey: 'category_id', onDelete: 'CASCADE'})

// Categories have many Products
Category.hasMany(Product, {foreignKey: 'category_id', onDelete: 'CASCADE'})


// Products belongToMany Tags (through ProductTag)
Product.belongsToMany(Tag, {through: ProductTag, foreignKey: 'product_id'})

// Tags belongToMany Products (through ProductTag)
Tag.belongsToMany(Product, {through: ProductTag, foreignKey: 'tag_id'})

module.exports = {
  Product,
  Category,
  Tag,
  ProductTag,
};
