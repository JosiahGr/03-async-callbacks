'use strict';

const fs = require('fs');
const logger = require('./logger');

module.exports = (paths, callback) => {
  logger.log(logger.INFO, 'reading paths');
  return fs.readFile(paths, (err, data) => {
    if (err) {
      callback(err);
    }
    logger.log(logger.INFO, data.toString('utf8'));
    return callback(null, data.toString('utf', 0));
  });
};
