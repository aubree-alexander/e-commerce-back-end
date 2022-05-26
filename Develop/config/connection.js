require('dotenv').config();

const Sequelize = require('sequelize');

//jawsdb - live veresion of sql database that's free to use. 
//if there is an instance of jawsdb that exists, sync that with the sequelize connection, otherwise use your local sequel environment.
// true ? dothis : otherwise do this
// loggedin ? homepage : loginpage
// ternary
const sequelize = process.env.JAWSDB_URL
  ? new Sequelize(process.env.JAWSDB_URL)
  : new Sequelize(process.env.DB_NAME, process.env.DB_USER, process.env.DB_PW, {
      host: 'localhost',
      dialect: 'mysql',
      dialectOptions: {
        decimalNumbers: true,
      },
    });

module.exports = sequelize;
