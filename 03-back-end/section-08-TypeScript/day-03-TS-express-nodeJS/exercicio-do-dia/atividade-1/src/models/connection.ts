// ./models/connection.ts

import mysql from 'mysql2/promise'; // instalar mysql2 e dotenv

import dotenv from 'dotenv';

dotenv.config();

export default mysql.createPool({
  host: process.env.DATABASE_HOST,
  user: process.env.DATABASE_USER,
  password: process.env.DATABASE_PASSWORD,
  database: process.env.DATABASE_NAME,
});