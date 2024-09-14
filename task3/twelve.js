/*
12
Create a function called addToEnd
that accept an array and value
and return the entire array with add this value to the end of this array

var nums= [1,2,3,8,9]
Ex: addToEnd(nums,55) =>  [1,2,3,8,55]

**try more cases by your self
*/


function addToEnd(arr, val) {
    arr.push(val);
    return arr;
}
console.log(addToEnd([1, 2, 3, 8, 9], 55)); // [1, 2, 3, 8, 9, 55]