'use strict';

/**
 * @param {string} sourceString
 *
 * @return {object}
 */
function convertToObject(sourceString) {
  const styleValues = {};
  const stylePairs = sourceString
    .split(';')
    .filter((value) => value.trim().length > 1)
    .map((value) => value.split(':'));

  stylePairs.forEach(([a, b]) => {
    const property = a.replace('\n', '').trim();

    styleValues[property] = b.trim();

  });

  return styleValues;
}

module.exports = convertToObject;
