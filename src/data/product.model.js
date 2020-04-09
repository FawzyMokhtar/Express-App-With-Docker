const { Model, DataTypes } = require('sequelize');
const { sequelize } = require('./sequelize');

/**
 * The Products model that maps the `products table` in the database.
 */
class Product extends Model {}

/**
 * Define the model structure here.
 */
Product.init(
  {
    id: {
      type: DataTypes.BIGINT,
      primaryKey: true,
      autoIncrement: true,
    },
    name: {
      type: DataTypes.STRING(50),
      allowNull: false,
    },
    price: {
      type: DataTypes.DECIMAL(19, 2),
      allowNull: false,
    },
  },
  {
    sequelize: sequelize,
    modelName:
      'products' /* The model name & also the mapped database table name.  */,
    timestamps: false,
  }
);

module.exports.Product = Product;
