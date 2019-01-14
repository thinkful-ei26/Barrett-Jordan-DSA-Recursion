// Calculates the nth triangular number. 
// A triangular number counts the objects that can form an equilateral triangle. 
// The nth triangular number is the number of dots composing a triangle with n dots on a side, 
// and is equal to the sum of the n natural numbers from 1 to n. 
// This is the Triangular Number Sequence: 1, 3, 6, 10, 15, 21, 28, 36, 45

//natural number: a number that occurs commonly and obviously in nature

//input: 1, 2, 3, 4, 5, 6, 7, 8, 9, 10
//output: 1, 3, 6, 10, 15, 21, 28, 36, 45

//base case: if number === 0

//general case:

function nthTriangle(num) {
    if (num === 0) {
        return 0;
    }

    return num + nthTriangle(num -1)
}
console.log(nthTriangle(4));
