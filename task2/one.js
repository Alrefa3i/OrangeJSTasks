/*
1) Write a code by using if or switch case statement  and prompt message to the user to insert their birthdate month then you should tell them their month that give you an output such as below:
The input: 8
The output: August 
The input: 3
The output: March
*/

let month = prompt("Enter your birth month number: ");
switch (month) {
    case "1":
        alert("January");
        break;
    case "2":
        alert("February");
        break;
    case "3":
        alert("March");
        break;
    case "4":
        alert("April");
        break;
    case "5":
        alert("May");
        break;
    case "6":
        alert("June");
        break;
    case "7":
        alert("July");
        break;
    case "8":
        alert("August");
        break;
    case "9":
        alert("September");
        break;
    case "10":
        alert("October");
        break;
    case "11":
        alert("November");
        break;
    case "12":
        alert("December");
        break;
    default:
        alert("Invalid month number");
}