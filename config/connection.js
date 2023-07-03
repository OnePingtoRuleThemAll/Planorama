// Loads environment variables from a .env file
require('dotenv').config();

// Importing the Sequelize library
const Sequelize = require('sequelize');



// Create a connection object
const sequelize = process.env.JAWSDB_URL
  ? new Sequelize(process.env.JAWSDB_URL)
  //Defines Database Name, Database User & Database Password
  : new Sequelize(process.env.DB_NAME, process.env.DB_USER, process.env.DB_PW, {
      // Database location
      host: 'localhost',
      dialect: 'mysql',
      dialectOptions: {
        decimalNumbers: true,
      },
    });

// Exports the Sequelize instance for use in other modules
module.exports = sequelize;
