import Sequelize from 'sequelize';
import dotenv from 'dotenv';
dotenv.config();

let database;

if (process.env.DB_URL) {
  database = new Sequelize(process.env.DB_URL)
} else {
  database = new Sequelize({
    database: process.env.DB_NAME,
    username: process.env.DB_NAME,
    password: process.env.DB_PASSWORD,
    host: 'localhost',
    dialect: 'postgres',
  });
};

export default database;
