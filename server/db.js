const mysql = require('mysql2/promise');
require('dotenv').config();

console.log('Attempting to connect to:', process.env.DB_HOST, 'on port', process.env.DB_PORT);

const pool = mysql.createPool({
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME,
  port: parseInt(process.env.DB_PORT) || 21434,
  waitForConnections: true,
  connectionLimit: 10,
  queueLimit: 0,
  connectTimeout: 20000, // Increase timeout to 20 seconds
  ssl: {
    rejectUnauthorized: false
  }
});

module.exports = pool;
