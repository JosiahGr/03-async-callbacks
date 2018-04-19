'use strict';

const fs = require('fs');
const logger = require('./logger');

module.exports = (filePath, callback) => {
  logger.log(logger.VERBOSE, `reading ${filePath}`);
  return fs.readFile(
    filePath, 
    (err, data) => {
      if (err) {
        callback(err);
      }
      return callback(null, data.toString('utf8'));
    },
  );
};
