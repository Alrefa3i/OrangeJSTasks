/*
 * Exercise 6:
 *
 * Make an array of the names in h1s, and the ages in h2s
 *
 * Test Case:
 *
 * console.log(readyToPutInTheDOM([
 *   {
 *       name: "Angelina Jolie",
 *       age: 80
 *   },
 *   {
 *       name: "Eric Jones",
 *       age: 2
 *   },
 *   {
 *       name: "Paris Hilton",
 *       age: 5
 *   },
 *   {
 *       name: "Kayne West",
 *       age: 16
 *   },
 *   {
 *       name: "Bob Ziroll",
 *       age: 100
 *   }
 * ]));
 *
 * Result:
 *
 * ["<h1>Angelina Jolie</h1><h2>80</h2>",
 * "<h1>Eric Jones</h1><h2>2</h2>",
 * "<h1>Paris Hilton</h1><h2>5</h2>",
 * "<h1>Kayne West</h1><h2>16</h2>",
 * "<h1>Bob Ziroll</h1><h2>100</h2>"]
 */

function readyToPutInTheDOM(arr) {
    let result = arr.map((name) => {
        return `<h1>${name.name}</h1><h2>${name.age}</h2>`;
    });
    return result;
}



console.log(
    readyToPutInTheDOM([
        {
            name: "Angelina Jolie",
            age: 80,
        },
        {
            name: "Eric Jones",
            age: 2,
        },
        {
            name: "Paris Hilton",
            age: 5,
        },
        {
            name: "Kayne West",
            age: 16,
        },
        {
            name: "Bob Ziroll",
            age: 100,
        },
    ])
);