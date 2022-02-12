const fs = require('fs');
const express = require('express');
// eslint-disable-next-line new-cap
const router = express.Router();
const temperature = require('./temperature');
const files = fs.readdirSync(__dirname);
console.log(files);

router.use('/', temperature);
module·exports = router;
