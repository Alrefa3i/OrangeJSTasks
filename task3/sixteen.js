/*
16
Create a function called oddArray
that accept an array
and return an array have only the odd elemnts

var nums= [1,2,3,8,9]
Ex: oddArray(nums) => [1,3,9]

** solve it one time using for loop and another using while loop
**try more cases by your self
*/


function oddArray(arr) {
    let newArr = [];
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] % 2 !== 0) {
            newArr.push(arr[i]);
        }
    }
    return newArr;
}

function oddArray(arr) {
    let newArr = [];
    let i = 0;
    while (i < arr.length) {
        if (arr[i] % 2 !== 0) {
            newArr.push(arr[i]);
        }
        i++;
    }
    return newArr;
}
console.log(oddArray([1, 2, 3, 8, 9])); // [1, 3, 9]