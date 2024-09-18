/*
 * Exercise 7:
 * Write a function called doubleValues which accepts an array and returns a new array with all the values in the array passed to the function doubled
 *
 * Test Cases:
 *   Test Case 1:  doubleValues([1,2,3])
 *   Test Case 2:  doubleValues([1,-2,-3])
 *
 * Result:
 * Test Case 1: [2,4,6]
 * Test Case 2: [2,-4,-6]
 */

function doubleValues(arr) {
    let result = arr.map((num) => num * 2);
    return result;
}


console.log(doubleValues([1, 2, 3])); // [2, 4, 6]