'use strict';

const fileReader = require('./lib/reader');

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
        console.log(err);
      }
      readFileArrayAsync(fileArray, currentIndex + 1, callback);
    });
  } catch (err) {
    console.log(err);
  }
  return undefined;
};

readFileArrayAsync(files, 0, () => console.log('All riles have been read'));
