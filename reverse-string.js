'use strict';
//Write a function that reverses a string. 
// Take a string as input, reverse the string, and return the new string.

// input: 'hello'
// output: 'olleh'

// base case: return '';

// general case: take last character of the string, add it to end of new string,
// call function with string minus character

// const string = 'hello';
// console.log(string[string.length - 1]);

function reverseString(string) {
  if (string === '') {
    return '';
  }

  const char = string.charAt(0);
  console.log(char);
  return reverseString(string.slice(1)) + char;
}

console.log(reverseString('hello'));
// const string = 'hello';
// console.log(string.slice());