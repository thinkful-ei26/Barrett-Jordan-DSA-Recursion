'use strict';
//Write a recursive function that prints out the binary representation 
// of a given number. For example, the program should take 3 as an 
// input and print 11 as output, or 25 as an input and print 11001 as an output. 
// Note that the binary representation of 0 should be 0.

function toBinary(num) {
  if (num < 1) {
    return '';
  }

  return Math.floor(num % 2) + toBinary(num/2);
}

console.log(toBinary(3));