const { Sequelize } = require("sequelize");

const seq = new Sequelize("social_medi","root","", {
  dialect: "mysql",
  host: "localhost",
});

module.exports = seq;