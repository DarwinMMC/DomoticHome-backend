const express = require('express');
// eslint-disable-next-line new-cap
const router = express.Router();
const controller = require('../controllers/temperature');

router.get('/', controller.getTemperature);

module.exports = router;
