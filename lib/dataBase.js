/**
 * MySql 연동
 */
const mysql = require('mysql2/promise')
const connection = mysql.createPool({
    host : 'localhost',
    port : 3306,
    user : 'jalim',
    password : 'dla39275566!',
    database : 'nodeExpress'
})
module.exports = connection
/*
connection.connect()
connection.query('SELECT * FROM USERS', (error, rows, fields) => {
    if(error) throw  error;
    console.log('User info is: ', rows);
})
connection.end();*/
