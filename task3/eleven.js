/*
11
Create a function called arrayExceptLast
that accept an array
and return the entire array except the last elemnt
** hint: search abou the function that will cut the array on MDN
var nums= [1,2,3,8,9]
Ex: arrayExceptLast(nums) =>  [1,2,3,8]

**try more cases by your self
*/


function arrayExceptLast(arr) {
    return arr.slice(0, arr.length - 1);
}
console.log(arrayExceptLast([1, 2, 3, 8, 9])); // [1, 2, 3, 8]