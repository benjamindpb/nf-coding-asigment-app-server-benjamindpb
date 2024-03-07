import 'dotenv/config';
import { Sequelize } from 'sequelize';

const dbName = process.env.DB_NAME;
const dbUser = process.env.DB_USERNAME;
const host = process.env.DB_HOST;
const dialect = process.env.DB_DIALECT;
const dbPassword = process.env.DB_PASSWORD;

const sequelize = new Sequelize(dbName, dbUser, dbPassword, {
  host,
  dialect,
});

export default sequelize;