const { Model, DataTypes } = require("sequelize");
const sequelize = require("../util/database");

class Auth extends Model {}
Auth.init(
  {
    userName: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    EmailId: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    Password:{
        type: DataTypes.STRING,
        allowNull: false,
    },
  },
  {
    sequelize: sequelize,
  }
);

module.exports = Auth;
