/*
 * Exercise 2:
 * Write a function called onlyEvenValues which accepts an array and returns a new array with only the even values in the array passed to the function
 *
 * Test Cases:
 *   onlyEvenValues([1,2,3])
 *   onlyEvenValues([5,1,2,3,10])
 *
 * Result:
 *  Test Case 1:  [2]
 *  Test Case 2: [2,10]
 */
function onlyEvenValues(arr) {

  let newarr = []
  arr.forEach(element => {
    if (element %2 ===0) {
      newarr.push(element)
    }
  });
}


console.log(onlyEvenValues([1, 2, 3]))
