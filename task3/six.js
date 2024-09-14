/*
6
Using console make this array to be like this one (push, unshift, shift, pop)

var array = [0,5,7,9]
=> [1,3,4,6,8,9,10]
*/

var array = [0, 5, 7, 9];

// Remove the first element (0)
array.shift();

// Remove the first element (5)
array.shift();

// Add elements to the beginning
array.unshift(1, 3, 4, 6, 8);

// Add element to the end
array.push(10);

console.log(array); // [1, 3, 4, 6, 8, 9, 10]
