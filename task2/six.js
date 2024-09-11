/*
6) A pandigital number contains all digits (0-9) at least once. Write a function that takes an integer, returning true if the integer is pandigital, and false otherwise. 

EX: 
isPandigital (98140723568910) ➞ true 
isPandigital (90864523148909) ➞ false 
// 7 is missing.
*/

function isPandigital(num) {
    let numStr = num.toString();
    let numSet = new Set(numStr);
    return numSet.size === 10;
}

console.log(isPandigital(98140723568910)); // true