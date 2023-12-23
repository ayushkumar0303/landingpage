import mysql from 'mysql2'
import dotenv from 'dotenv'
dotenv.config()

const port = process.env.PORT;
const pool = mysql.createPool({
    host: process.env.MYSQL_HOST,
    user: process.env.MYSQL_USER,

    password: process.env.MYSQL_PASSWORD,
    database: process.env.MYSQL_DATABASE
}).promise()

export async function UserInput(Name, Email,Message) {
    await pool.query(`
    INSERT INTO userDetails (Name, Email, Message)
    VALUES (?, ?,?)
    `, [Name, Email,Message])
  }


