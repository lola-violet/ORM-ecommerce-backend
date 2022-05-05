// Variables for sequelize & dotenv
const Sequelize = require('sequelize');
require('dotenv').config();

// Connection configuration using .env variables
const sequelize = process.env.JAWSDB_URL
  ? new Sequelize(process.env.JAWSDB_URL)
  : new Sequelize(process.env.DB_NAME, process.env.DB_USER, process.env.DB_PW, {
      host: 'localhost',
      dialect: 'mysql',
      dialectOptions: {
        decimalNumbers: true,
      },
});

// Export connection
module.exports = sequelize;
