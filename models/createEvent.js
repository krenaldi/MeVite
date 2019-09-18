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
    return CreateEvent;
  }