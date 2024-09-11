/*
    4) Write a function called multiplication2 
that takes two parameters 
and return the multiplication of them 
you need to use only sum 
multiplication2(5,4) => 20 
multiplication2(2,8) => 16 
multiplication2(7,6) => 42
*/
function multiplication2(num1, num2) {
  let result = 0;
  for (let i = 1; i <= num2; i++) {
    result += num1;
  }
  return result;
}
console.log(multiplication2(5, 4)); // 20