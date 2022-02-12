const express = require('express');
const app = express();
const router = require('./routes');

const morgan = require('morgan');

/** middlewares */
app.use(morgan('dev'));

app.use(router);

module.exports = app;
