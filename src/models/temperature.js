const serialPort = require('serialport');
const {BAUD, COM} = require('../config');
// eslint-disable-next-line new-cap
const port = new serialPort(COM, {
  baudRate: BAUD,
  autoOpen: false,
});

port.open(function(err) {
  if (err) {
    return console.log('Error opening port: ', err.message);
  }
  port.write('On');
});

port.on('data', function(data) {
  console.log('Data:', data);
});
