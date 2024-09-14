/*
18
Create a function called shorterInArray
that accept an array of strings
and return the shortest string inside this array (first)

var strings= ["alex","mercer","madrasa","rashed2","emad","hala"]
Ex: shorterInArray(strings) => "alex"

** solve it one time using for loop and another using while loop
**try more cases by your self
*/


function shorterInArray(arr) {
    let shorter = arr[0];
    for (let i = 1; i < arr.length; i++) {
        if (arr[i].length < shorter.length) {
            shorter = arr[i];
        }
    }
    return shorter;
}


function shorterInArray(arr) {
    let shorter = arr[0];
    let i = 1;
    while (i < arr.length) {
        if (arr[i].length < shorter.length) {
            shorter = arr[i];
        }
        i++;
    }
    return shorter;
}
console.log(shorterInArray(["alex", "mercer", "madrasa", "rashed2", "emad", "hala"])); // "alex"