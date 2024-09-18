/*
 * Exercise 1:
 * Write a function called doubleValues which accepts an array and returns a new array with all the values in the array passed to the function doubled
 *
 * Test Case:
 *    Test Case 1: doubleValues([1,2,3])
 *    Test Case 2: doubleValues([5,1,2,3,10])
 *
 * Result:
 * Test Case 1:  [2,4,6]
 * Test Case 2: [10,2,4,6,20]
 *
 *
 */
function doubleValues(arr) {
  let newarr = [];
  arr.forEach((number) => {
    newarr.push(number * 2);
  });
  return arr;
}

let test = [1, 2, 3, 4, 5];
console.log(doubleValues(test));
