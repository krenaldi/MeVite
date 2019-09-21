
module.exports = (sequelize, DataTypes) => {

    var Contacts = sequelize.define('contacts', {
      contactName: {
        type: DataTypes.STRING,
        allowNull: false
      },
      contactEmail: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true,
        validate: {
          isEmail: true
        }
      },
      contactPhone: {
          type: DataTypes.STRING,
          allowNull: false,
          unique: true
        }
    }
    );
    Contacts.associate = function(models){
      Contacts.belongsTo(models.User);
      
      // Contacts.belongsToMany(models.createEvent, { through: "event_contact" });
    }
    return Contacts;
  }