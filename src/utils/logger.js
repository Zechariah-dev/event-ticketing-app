const winston = require('winston');

const logger = new (winston.transports.Console)({
    datePattern: 'yyyy-MM-dd.',
    prepend: true,
    json: false,
    colorize: true,
    level: process.env.ENV === 'development' ? 'debug' : 'info',
  });
  return new (winston.Logger)({
    transports: [
      consoleTransport,
    ],
  });


  module.exports = logger;