'use strict';

const fileReader = require('./lib/reader');
const logger = require('./lib/logger');

const litanyPath = `${__dirname}/assets/litany.txt`;
const fooPath = `${__dirname}/assets/foo.txt`;
const wordsPath = `${__dirname}/assets/words.txt`;

const files = [litanyPath, fooPath, wordsPath];

const readFileArrayAsync = (fileArray, currentIndex, callback) => {
  if (currentIndex >= fileArray.length) {
    return callback();
  }
  
  const currentFilePath = fileArray[currentIndex];
  try {
    return fileReader(currentFilePath, (err, data) => {
      if (err) {
        logger.log(logger.ERROR, err);
        logger.log(logger.INFO, data);
      }
      readFileArrayAsync(fileArray, currentIndex + 1, callback);
    });
  } catch (err) {
    logger.log(logger.ERROR, err);
  }
  return undefined;
};

readFileArrayAsync(files, 0, () => logger.log(logger.INFO, 'All files have been read'));
