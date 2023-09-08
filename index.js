const winston = require('winston');
const express = require ('express');

const app = express();


require('./startup/logging');

const db = require('./startup/db');
db.connection();
require('./startup/routes')(app);
require('./startup/config')();
require('./startup/validation')();
//require('./startup/prod')(app);
//const logger = require('./middleware/logger');


const port = process.env.PORT || 4000;
const server = app.listen(port, ()=> winston.info(`listening on port ${port}...`));

module.exports = server;

