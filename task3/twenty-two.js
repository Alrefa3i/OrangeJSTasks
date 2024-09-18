/*
22
Create a function called evenNumberEvenIndex
that accept an array of nums
and return a new array that have the even number in even index

var nums= [5,2,2,1,8,66,55,77,34,9,55,1]
Ex: evenNumberEvenIndex(nums) => [2,8,34]

** solve it one time using for loop and another using while loop
**try more cases by your self
*/



function evenNumberEvenIndex(arr) {
    let newArr = [];
    for (let i = 0; i < arr.length; i += 2) {
        if (arr[i] % 2 === 0) {
            newArr.push(arr[i]);
        }
    }
    return newArr;
}

function evenNumberEvenIndex(arr) {
    let newArr = [];
    let i = 0;
    while (i < arr.length) {
        if (arr[i] % 2 === 0) {
            newArr.push(arr[i]);
        }
        i += 2;
    }
    return newArr; 
}
console.log(evenNumberEvenIndex([5, 2, 2, 1, 8, 66, 55, 77, 34, 9, 55, 1])); // [2, 8, 34]