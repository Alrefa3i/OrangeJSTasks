/*
15
Create a function called removeFromArray
that accept an array and elemnt to remove
and return the array after remove this elemnt from it

var nums= [1,2,3,8,9]
Ex: minInArray(nums,8) => [1,2,3,9]

** solve it one time using for loop and another using while loop
**try more cases by your self
*/


function removeFromArray(arr, val) {
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] === val) {
            arr.splice(i, 1);
        }
    }
    return arr;
}


function removeFromArray(arr, val) {
    let i = 0;
    while (i < arr.length) {
        if (arr[i] === val) {
            arr.splice(i, 1);
        }
        i++;
    }
    return arr;
}