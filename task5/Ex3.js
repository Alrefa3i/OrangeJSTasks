/*
 * Exercise 3:
 * Write a function called showFirstAndLast which accepts an array of strings and returns a new array with only the first and last character of each string.
 *
 * Test Case:
 *   Test Case 1: showFirstAndLast(['colt','matt', 'tim', 'udemy'])
 *   Test Case 2 :showFirstAndLast(['hi', 'goodbye', 'smile'])
 *
 * Result:
 * Test Case 1: ["ct", "mt", "tm", "uy"]
 * Test Case 2: ['hi', 'ge', 'se']
 *
 */
function showFirstAndLast(arr) {
  let newarr = [];

  arr.forEach((element) => {
    newarr.push(element[0] + element[element.length - 1]);
  });
  return newarr;
}

console.log(showFirstAndLast(["colt", "matt", "tim", "udemy"]));
