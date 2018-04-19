'use strict';

const fs = require('fs');

module.exports = (paths, callback) => {
  console.log('reading paths');
  return fs.readFile(paths, (err, data) => {
    if (err) {
      callback(err);
    }
    console.log(data.toString('utf8'));
    return callback(null, data.toString('utf', 0));
  });
};
