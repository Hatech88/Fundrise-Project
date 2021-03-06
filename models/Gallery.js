const sequelize = require('../config/connection');

// import or define Models 
const { Model, DataTypes } = require('sequelize');
 
// create a class for this model and export it

// what does this line do
class Gallery extends Model {}

Gallery.init(
    {
        id: {
          type: DataTypes.INTEGER,
          allowNull: false,
          primaryKey: true,
          autoIncrement: true,
        },
        name: {
          type: DataTypes.STRING,
          allowNull: false,
        },
        starting_date: {
          type: DataTypes.DATE,
          allowNull: false,
        },
        ending_date: {
          type: DataTypes.DATE,
          allowNull: false,
        },
      },
      {
        sequelize,
        freezeTableName: true,
        underscored: true,
        modelName: 'gallery',
      }
);

module.exports = Gallery;