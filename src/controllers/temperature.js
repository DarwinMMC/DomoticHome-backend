const serial = require('../models/temperature');
const controller = {
  getTemperature: (req, res) => {
    res.status(200).send('30ºC');
  },
};

module.exports = controller;
