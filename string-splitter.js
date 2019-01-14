'use strict';

// Split a string based upon a separator (similar to String.prototype.split).

// input: ('hello world', ' ')  string, seperator
// output: ["hello", "world"]

function stringSplitter(string, seperator, index) {
  // base case
  if (index > 5) {
    return '';
  }
  // general
  const sepIndex = string.indexOf(seperator, index);
  // console.log(sepIndex);
  // return string.slice(stringSplitter(string, ' '));
  // return [sepIndex, ...stringSplitter(string, seperator, sepIndex+1)];
  console.log([sepIndex, ...stringSplitter(string, seperator, sepIndex+1)]);
  return [sepIndex, ...stringSplitter(string, seperator, sepIndex+1)];
}
const string = 'hello world';
stringSplitter(string, '', 0);
// console.log(string.slice(stringSplitter(string, ' ')[0]));
// console.log(stringSplitter(string.slice(5), ' '));
// console.log(string.slice(stringSplitter(string, ''))[5]);
// console.log(string.slice(stringSplitter(string, '', 0)[1], stringSplitter(string, '', 0)[2]));
// console.log([sepIndex, ...stringSplitter(string, seperator, sepIndex+1)]);
//console.log(stringSplitter("Hello world", " ")); 
// --> ["Hello", "world"]
