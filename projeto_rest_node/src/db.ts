import { Pool } from "pg";

const db = new Pool({
  user: "postgres",
  host: "localhost",
  database: "projetoAPI",
  password: "123",
  port: 5432,
});

export default db;
