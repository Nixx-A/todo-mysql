import { createPool } from "mysql2/promise";

export const pool = createPool({
  host: "localhost",
  user: "root",
  password: "7894561230-As",
  database: "tododb",
  port: 3306
})