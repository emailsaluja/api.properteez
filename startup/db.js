const mysql = require('mysql');
const express = require('express');

var mysqlConnection = mysql.createConnection({
    host: 'res-1.c3eiubq9btsm.ap-southeast-2.rds.amazonaws.com',
    port: '3306',
    user: 'admin',
    password: 'born2win',
    database: 'realestate',
    multipleStatements: true
});


mysqlConnection.connect((err) => {
    if (!err)
        console.log('Connection Established Successfully');
    else
        console.log('Connection Failed!' + JSON.stringify(err, undefined, 2));
});