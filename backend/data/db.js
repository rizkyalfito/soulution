// backend/data/db.js
const mysql = require('mysql');

const pool = mysql.createPool({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'soul',
});

module.exports = pool;
