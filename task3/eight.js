/*
8
Create a function called middleOfArray
that take an array as a parameter
and return the middle element in an array if it is have an odd elemnets
and return the two middle elemnt in an array if it is have an even elemnets

Ex: middleOfArray([1,4,5]) => 4
Ex: middleOfArray(["t","u","g","x"]) =>"u and g"
*/


function middleOfArray(arr) {
    const len = arr.length;
    const mid = Math.floor(len / 2);
    
    if (len % 2 === 0) {
        return arr[mid - 1] + " and " + arr[mid];
    } else {
        return arr[mid];
    }
}