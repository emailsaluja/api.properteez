const helmet = require('helmet');
const bodyparser = require('body-parser');
const winston = require("winston");
const morgan = require('morgan');
const config = require("config");
const express = require("express");
const properties = require('./routes/properties');

var app = express();
app.use(bodyparser.json());
app.use(helmet());

if (app.get('env') == "development") {
    app.use(morgan('tiny'));
}


app.use('/v1/api/properties', properties);

//set NODE_ENV=production

const port = process.env.PORT || config.get('app-port');
const server = app.listen(port, () =>
    winston.info(`Listening on port ${port}...`)
);