import pkg from "pg";
const { Pool } = pkg;

export const pool = new Pool({
  user: "postgres",
  host: "localhost",
  database: "minifier",
  password: "password",
  port: 5432,
});

pool.connect;
