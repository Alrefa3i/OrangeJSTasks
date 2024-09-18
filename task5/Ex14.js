/*
 * Exercise 9:
 * Write a function called extractKey which accepts an array of objects and some key and returns a new array with the value
 * of that key in each object.
 *
 * Test Case:
 * extractKey([{name: 'Elie'}, {name: 'Tim'}, {name: 'Matt'}, {name: 'Colt'}], 'name')
 *
 * Result:
 * ['Elie', 'Tim', 'Matt', 'Colt']
 */

function extractKey(arr, key) {
  let result = arr.map((obj) => obj[key]);
  return result;
}

console.log(
  extractKey(
    [{ name: "Elie" }, { name: "Tim" }, { name: "Matt" }, { name: "Colt" }],
    "name"
  )
); // ['Elie', 'Tim', 'Matt', 'Colt']
