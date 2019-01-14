'use strict';
// Write a recursive function that prints the nth fibonacci number. 
// The Fibonacci sequence is a series of numbers in which each number 
// is the sum of the two preceding numbers. For this problem, 
// if you were asked to find the 7th fibonacci number, it would be 13. 
// The whole sequence looks as follows: 1 1 2 3 5 8 13. As a bonus, 
// see if you can print the whole sequence including the nth fibonacci.

function fib(num) {
  if (num <= 0) {
    return 0;
  }
  else if (num === 1) {
    return 1;
  }

  let nextNum = fib(num - 1) + fib(num - 2);
  console.log(nextNum);
  return nextNum;
}

fib(7);