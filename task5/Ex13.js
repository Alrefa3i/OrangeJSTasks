/*
 * Exercise 8:
 * Write a function called valTimesIndex which accepts an array and returns a new array with each value multiplied by the index it is currently at in the array.
 *
 *
 * Test Cases :
 *   Test Case 1:  valTimesIndex([1,2,3])
 *   Test Case 2:  valTimesIndex([1,-2,-3])
 *
 * Result
 * Test Case 1: [0,2,6]
 * Test Case 2: [0,-2,-6]
 */

function valTimesIndex(arr) {
    let result = arr.map((num, index) => num * index);
    return result;
}

console.log(valTimesIndex([1, 2, 3])); // [0, 2, 6]