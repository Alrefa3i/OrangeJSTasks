/*
 * Exercise 3:
 *
 * Capitalize each of an array of names
 *
 * Test Case:
 *
 * console.log(capitalizeNames(["john", "JACOB", "jinGleHeimer", "schmidt"]));
 *
 * Result:
 *  ["John", "Jacob", "Jingleheimer", "Schmidt"]
 */

function capitalizeNames(arr, index) {
  let res = arr.map((text) => {
    let newt = text.toLowerCase();
    return newt[0].toUpperCase() + newt.slice(1);
  });
  return res;
}

console.log(capitalizeNames(["john", "JACOB", "jinGleHeimer", "schmidt"]));
