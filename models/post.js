module.exports = function(sequelize, DataTypes)
{
    return sequelize.define('users', {
        username: {type: DataTypes.STRING, primaryKey: true},
        password: DataTypes.STRING,
        email: DataTypes.STRING
        })
    };