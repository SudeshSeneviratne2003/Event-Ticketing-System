import mysql from "mysql2/promise";

let connection;

export const connectToDatabase = async () => {
  try {
    if (!connection) {
      connection = await mysql.createConnection({
        host: 'localhost',
        user: 'root',
        password: '',
        database: 'authentication',
      });
    }
    return connection;
  } catch (err) {
    console.log(err);
  }
};