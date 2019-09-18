
module.exports = (sequelize, DataTypes) => {

    var Contacts = sequelize.define('contacts', {
      userName: {
        type: DataTypes.STRING,
        allowNull: false
      }, name: {
        type: DataTypes.STRING,
        allowNull: false
      },
      email: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true,
        validate: {
          isEmail: true
        }
      },
        number: {
          type: DataTypes.INTEGER,
          allowNull: false,
          unique: true,
          validate: {
            isNumber: true
          }
        }
    }
    );
    return Contacts;
  }