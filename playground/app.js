const express = require('express');
const app = express();
const helmet = require('helmet');
const errorHandler = require('./api/middleware/errorHandler');
require('express-async-errors');

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(helmet());

app.use('/api', require('./api'));

app.use(errorHandler);

module.exports = app;