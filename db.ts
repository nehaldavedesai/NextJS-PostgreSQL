const { Pool } = require('pg');
require ('dotenv').config();

const connectionPool = new Pool({
  connectionString: process.env.DATABASE_URL,
  user: process.env.DATABASE_USER,
  host: process.env.DATABASE_HOST,
  database: process.env.DATABASE_NAME,
  password: process.env.DATABASE_PASSWORD,
  port: 3006,
});

module.exports = connectionPool;