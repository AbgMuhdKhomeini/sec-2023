// establish connection with database
import pkg from "pg";
const { Pool } = pkg;

const pool = new Pool({
  host: "localhost",
  user: "postgres",
  port: "5432",
  database: "todo_app",
  password: "5355@Asam#$",
  max: 20,
  idleTimeoutMillis: 30000,
  connectionTimeoutMillis: 2000,
});
// pool is a passport to send request to database

// const checkConnection = async () => {
//   try {
//     const client = await pool.connect();
//     console.log("Database Connected");
//     client.release();
//   } catch (error) {
//     console.error("Database connection error", err);
//   }
// };

export async function checkConnection() {
  try {
    // resolve promise
    const client = await pool.connect();
    console.log("Database Connected", client.database);
  } catch (error) {
    // rejected promise
    console.log("Could not connect to database", error);
  }
}

export default pool;
