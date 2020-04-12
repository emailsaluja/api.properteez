const bodyparser = require('body-parser');
const winston = require("winston");
//const config = require("config");
const express = require("express");
const properties = require('./routes/properties');

var app = express();
app.use(bodyparser.json());





app.use('/api/properties', properties);





const port = process.env.PORT || 5000;
const server = app.listen(port, () =>
    winston.info(`Listening on port ${port}...`)
);


