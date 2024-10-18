import mysql from "mysql2/promise";
import { ConnectionOptions } from "mysql2";
import dotenv from "dotenv";

dotenv.config();

const configOptions: ConnectionOptions = {
  host: process.env.MYSQL_HOST,
  user: process.env.MYSQL_USER,
  password: process.env.MYSQL_PASS,
  database: process.env.MYSQL_NAME,
  port: Number(process.env.MYSQL_PORT) || 3306,
};

const pool = mysql.createPool(configOptions);

export default pool;
