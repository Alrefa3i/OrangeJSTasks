/*
 * Exercise 1:
 *
 * Make an array of numbers that are doubles of the first array
 *
 * Test Case:
 *
 * console.log(doubleNumbers([2, 5, 100]));
 *
 * Result:
 * [4, 10, 200]
 */
function doubleNumbers(arr) {
  let result = Array(arr).map((num) => num * 2);
  return result;
}



