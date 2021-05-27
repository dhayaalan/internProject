const { Sequelize } = require("sequelize");

//Sequlize Database Connection 
const seq = new Sequelize("social_medi","root","", {
  dialect: "mysql",
  host: "localhost",
});

module.exports = seq;