'use strict';

// Split a string based upon a separator (similar to String.prototype.split).

// input: ('hello world', ' ')  string, seperator
// output: ["hello", "world"]

function stringSplitter(string, seperator, index) {
  // base case
  if (index > 4) {
    return '';
  }
  // general
  const sepIndex = string.indexOf(seperator, index);

  // console.log([sepIndex, ...stringSplitter(string, seperator, sepIndex+1)]);

  return [sepIndex, ...stringSplitter(string, seperator, sepIndex+1)];
}
const string = 'hello world here I am';
console.log(string.slice(stringSplitter(string, ' ', 0)));

