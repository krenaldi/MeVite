var db = require("./user.js");
var db = require("./contacts.js")

module.exports = (sequelize, DataTypes) => {
    
    var CreateEvent = sequelize.define('createEvent', {
        title: {
            type: DataTypes.STRING,
            allowNull: false
          },
          date: {
            type: DataTypes.DATE, 
            allowNull: false
          },
          time: {
            type: DataTypes.TIME, 
            allowNull: false
          },
          address: {
            type: DataTypes.STRING,
            allowNull: false
          },
          city: {
            type: DataTypes.STRING,
            allowNull: false
          },
          state: {
            type: DataTypes.STRING,
            allowNull: false
          },
          zipcode: {
            type: DataTypes.INTEGER,
            allowNull: false
          },
          country: {
            type: DataTypes.STRING,
            allowNull: false
          }
      }
    ); 
    CreateEvent.associate = function(models){
      CreateEvent.belongsTo(models.User, {
        foreignKey: {
          allowNull: false
        }
      });
      // CreateEvent.hasMany(models.contacts, { 
      //   as: 'contacts'
      // })
    }
    return CreateEvent;
  }