const mysql = require('mysql2');

const pool = mysql.createPool({
    host: 'localhost',
    user: 'root',
    password: 'Godisone123!',
    queueLimit: 0,
    connectionLimit: 20,
    waitForConnections: true,
    database: 'csc317db'






})

const promisePool = pool.promise();

module.exports = promisePool;