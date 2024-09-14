/*
19
Create a function called repeatChar
that accept a string and char
and return the times that this char repeat inside this string

var string= "alex mercer madrasa rashed2 emad hala"
Ex: repeatChar(string,"a") => 6
Ex: repeatChar(string,"z") => 0

** solve it one time using for loop and another using while loop
**try more cases by your self
*/


function repeatChar(str, char) {
    let count = 0;
    for (let i = 0; i < str.length; i++) {
        if (str[i] === char) {
            count++;
        }
    }
    return count;
}

function repeatChar(str, char) {
    let count = 0;
    let i = 0;
    while (i < str.length) {
        if (str[i] === char) {
            count++;
        }
        i++;
    }
    return count;
}
console.log(repeatChar("alex mercer madrasa rashed2 emad hala", "a")); // 6