/*
20
Create a function called evenIndexOddLength
that accept an array of strings
and return a new array that have the string with odd length in even index

var strings= ["alex","mercer","madrasa","rashed2","emad","hala"]
Ex: evenIndexOddLength(strings) => ["madrasa"]

** solve it one time using for loop and another using while loop
**try more cases by your self
*/


function evenIndexOddLength(arr) {
    let newArr = [];
    for (let i = 0; i < arr.length; i += 2) {
        if (arr[i].length % 2 !== 0) {
            newArr.push(arr[i]);
        }
    }
    return newArr;
}

function evenIndexOddLength(arr) {
    let newArr = [];
    let i = 0;
    while (i < arr.length) {
        if (arr[i].length % 2 !== 0) {
            newArr.push(arr[i]);
        }
        i += 2;
    }
    return newArr;
}
console.log(evenIndexOddLength(["alex", "mercer", "madrasa", "rashed2", "emad", "hala"])); // ["madrasa"]