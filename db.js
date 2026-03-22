const mysql = require('mysql2')
require('dotenv').config();
//connect to the mysql database
//create a mysql connection

const db = mysql.createConnection({
    host: process.env.HOST,
    user: process.env.USER,
    password: process.env.PASSWORD,
    database: process.env.DATABASE
})
module.exports = db