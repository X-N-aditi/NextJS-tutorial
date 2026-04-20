import mysql from "mysql2/promise";

export const db = mysql.createPool({
    host: "localhost",
    user: "root",
    password: "732002", 
    database: "nextapp",
});