const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class Book extends Model {}

Book.init(
  {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
    trip_budget: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    TRIP_AMOUNT: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    
    // Store a reference of the `id` of the `Reader` that owns this Book
    traveller_id: {
      type: DataTypes.INTEGER,
      referances: {
        model: 'traveller',
        key: 'id',
        unique: false,
      },
    location_id: {
    type: DataTypes.INTEGER,
    referances: {
        model: 'location',
        key: 'id',
        unique: false,
    },
},
  },
  {
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: 'book'
  }
);

module.exports = Book;
