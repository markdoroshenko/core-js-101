function concatenateStrings(value1, value2) {
  return `${value1}${value2}`;
}

const getStringLength = (value) => value.length;

function getStringFromTemplate(firstName, lastName) {
  return `Hello, ${firstName} ${lastName}!`;
}

function extractNameFromTemplate(value) {
  function isUpperCase(char) {
    return char === char.toUpperCase();
  }
  const arr = [];
  for (let i = 0; i <= value.length; i += 1) {
    if ((value[i] === ' ') && isUpperCase(value[i + 1])) {
      arr.push(i + 1);
    }
  }
  const preRes = value.substring(arr[0]);
  return preRes.replace('!', '');
}

function getFirstChar(value) {
  return value.at(0);
}

function removeLeadingAndTrailingWhitespaces(value) {
  return value.trim();
}

function repeatString(value, count) {
  let res = '';
  for (let i = 0; i < count; i += 1) {
    res += value;
  }
  return res;
}

function removeFirstOccurrences(str, value) {
  return str.replace(value, '');
}

function unbracketTag(str) {
  const del = /[<>]/gi;
  return str.replace(del, '');
}

function convertToUpperCase(str) {
  let res = '';
  for (let i = 0; i < str.length; i += 1) {
    res += str[i].toUpperCase();
  }
  return res;
}

function extractEmails(str) {
  return str.split(';');
}

function getRectangleString(width, height) {
  const verLine = '│';
  const horLineItem = '─';
  const horLineNum = width - 2;
  const verLineNum = height - 2;
  const horLine = horLineItem.repeat(horLineNum);
  const voidLine = ' '.repeat(horLineNum);
  const middleSection = `${verLine}${voidLine}${verLine}\n`;

  const topSide = `┌${horLine}┐\n`;
  const middleSide = middleSection.repeat(verLineNum);
  const bottomSide = `└${horLine}┘\n`;
  return `${topSide}${middleSide}${bottomSide}`;
}
console.log(getRectangleString(5, 4));

/**
 * Encode specified string with ROT13 cipher
 * See details:  https://en.wikipedia.org/wiki/ROT13
 *
 * @param {string} str
 * @return {string}
 *
 * @example
 *
 *   'hello' => 'uryyb'
 *   'Why did the chicken cross the road?' => 'Jul qvq gur puvpxra pebff gur ebnq?'
 *   'Gb trg gb gur bgure fvqr!' => 'To get to the other side!'
 *   'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz'
 *    => 'NOPQRSTUVWXYZABCDEFGHIJKLMnopqrstuvwxyzabcdefghijklm'
 *
 */
function encodeToRot13(/* str */) {
  throw new Error('Not implemented');
}

/**
 * Returns true if the value is string; otherwise false.
 * @param {string} value
 * @return {boolean}
 *
 * @example
 *   isString() => false
 *   isString(null) => false
 *   isString([]) => false
 *   isString({}) => false
 *   isString('test') => true
 *   isString(new String('test')) => true
 */
function isString(/* value */) {
  throw new Error('Not implemented');
}


/**
 * Returns playid card id.
 *
 * Playing cards inittial deck inclides the cards in the following order:
 *
 *  'A♣','2♣','3♣','4♣','5♣','6♣','7♣','8♣','9♣','10♣','J♣','Q♣','K♣',
 *  'A♦','2♦','3♦','4♦','5♦','6♦','7♦','8♦','9♦','10♦','J♦','Q♦','K♦',
 *  'A♥','2♥','3♥','4♥','5♥','6♥','7♥','8♥','9♥','10♥','J♥','Q♥','K♥',
 *  'A♠','2♠','3♠','4♠','5♠','6♠','7♠','8♠','9♠','10♠','J♠','Q♠','K♠'
 *
 * (see https://en.wikipedia.org/wiki/Standard_52-card_deck)
 * Function returns the zero-based index of specified card in the initial deck above.
 *
 * @param {string} value
 * @return {number}
 *
 * @example
 *   'A♣' => 0
 *   '2♣' => 1
 *   '3♣' => 2
 *     ...
 *   'Q♠' => 50
 *   'K♠' => 51
 */
function getCardId(/* value */) {
  throw new Error('Not implemented');
}


module.exports = {
  concatenateStrings,
  getStringLength,
  getStringFromTemplate,
  extractNameFromTemplate,
  getFirstChar,
  removeLeadingAndTrailingWhitespaces,
  repeatString,
  removeFirstOccurrences,
  unbracketTag,
  convertToUpperCase,
  extractEmails,
  getRectangleString,
  encodeToRot13,
  isString,
  getCardId,
};
