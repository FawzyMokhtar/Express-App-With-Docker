const { Sequelize } = require('sequelize');

/**
 * The database host.
 * @summary If omitted, the `localhost` value will be use.
 */
const host = process.env.DB_HOST || 'localhost';

/**
 * The database host port or empty for no port.
 */
const port = process.env.DB_HOST_PORT;

/**
 * The database username, default is root.
 */
const username = process.env.DB_USER || 'root';

/**
 * The database username's password.
 */
const password = process.env.DB_USER_PASSWORD || 'fawzy';

/* 
   Connect to database.
   NOTE: i'm connecting here to the database `express-app-with-docker-db` on my `localhost` with username `root` and password 'fawzy'.
   You can change this data and use your data instead.
 */

/**
 * A singleton instance of sequelize that will be used across the application.
 *
 * @summary It's important to not use any other instances of sequelize other than this instance unless you have more than one database.
 */
const sequelize = new Sequelize(
  'express-app-with-docker-db',
  username,
  password,
  {
    host: host,
    port: port,
    dialect: 'mysql',
  }
);

module.exports.sequelize = sequelize;
