const express = require("express");
const router = express.Router();
const bodyparser = require('body-parser');
const sql = require('../startup/db');

router.use(bodyparser.json());


router.get('/', (req, res) => {

    sql.query('select * from Property', (err, rows, fields) => {
        if (!err) {
            console.log('sending data');
            res.send(rows);
        } else {
            console.log('data failed!' + JSON.stringify(err, undefined, 2));
        }
    })
});

module.exports = router;