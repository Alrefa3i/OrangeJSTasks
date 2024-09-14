/*
14
Create a function called minInArray
that accept an array
and return the minimum value inside this array

var nums= [1,2,3,8,9]
Ex: minInArray(nums) => 1

** solve it one time using for loop and another using while loop
**try more cases by your self
*/

// all the exercises below should solved 2 times: 1- for loop 2- while lopp

function minInArray(arr) {
    let min = arr[0];
    for (let i = 1; i < arr.length; i++) {
        if (arr[i] < min) {
            min = arr[i];
        }
    }
    return min;
}

function minInArray(arr) {
    let min = arr[0];
    let i = 1;
    while (i < arr.length) {
        if (arr[i] < min) {
            min = arr[i];
        }
        i++;
    }
    return min;
}
console.log(minInArray([1, 2, 3, 8, 9])); // 1