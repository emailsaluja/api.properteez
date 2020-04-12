const express = require("express");
const router = express.Router();
const bodyparser = require('body-parser');

router.use(bodyparser.json());

const mysql = require('mysql');
//const express = require('express');

const mysqlConnection = mysql.createConnection({
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

router.get('/', (req, res) => {

    mysqlConnection.query('select * from Property', (err, rows, fields) => {
        if (!err) {
            console.log('sending data');
            res.send(rows);
        } else {
            console.log('data failed!' + JSON.stringify(err, undefined, 2));
        }
    })
});

module.exports = router;