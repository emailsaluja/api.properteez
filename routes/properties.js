const express = require("express");
const router = express.Router();
const bodyparser = require('body-parser');
const sql = require('../startup/db');
const property = require('../models/property');


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

router.post("/", async (req, res) => {

    const {
        error
    } = property.validateProperty(req.body);
    if (error) {
        console.log(error);
        return res.status(400).send(error.details[0].message);

    } else {
        console.log('all good');
        res.send("row inserted");
    }
    /*
        const query = "UPDATE Property SET short_description='" + short_description +"' long_descrption='" + long_descrption +"'";
        sql.query(query, (err, rows, fields) => {
            if (!err) {
                console.log('sending data');
                res.send(rows);
            } else {
                console.log('data failed!' + JSON.stringify(err, undefined, 2));
            }
        })  */
});

module.exports = router;