/*
7) Allow the user to enter his favorite drink and then give him the price of the drink

Use switch Statement
Ex : (Banana) >> “The price of a banana drink is 20 dollars”  And so on
*/
let drink = prompt("Enter your favorite drink: ");

switch (drink) {
    case "Banana":
        alert("The price of a banana drink is 20 dollars");
        break;
    case "Apple":
        alert("The price of an apple drink is 15 dollars");
        break;
    case "Orange":
        alert("The price of an orange drink is 10 dollars");
        break;
    case "Pineapple":
        alert("The price of a pineapple drink is 25 dollars");
        break;
    case "Mango":
        alert("The price of a mango drink is 30 dollars");
        break;
    default:
        alert("Invalid drink");
}
