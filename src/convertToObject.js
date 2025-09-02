'use strict';

/**
 * @param {string} sourceString
 *
 * @return {object}
 */
function convertToObject(sourceString) {
  const objectString = {};
  const arrayString = sourceString
    .split(';')
    .filter((value) => value.trim().length > 1)
    .map((value) => value.split(':'));

  arrayString.forEach(([a, b]) => {
    objectString[
      a
        .trim()
        .split('')
        .filter((letter) => letter !== '\n')
        .join('')
    ] = b.trim();
  });

  return objectString;
}

module.exports = convertToObject;
