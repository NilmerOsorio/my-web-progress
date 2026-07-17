// 1. Create an array that stores five animals.

console.log("--Exercise #1--");
const animals = ["dog", "cat", "otter", "beaver", "horse"];
console.log(animals);

// 2. Add two or more. One at the beginning and another at the end.

console.log("--Exercise #2--");
animals.unshift("Rooster");
console.log(animals);
console.log(animals.length);

animals.push("Ostrich");
console.log(animals);

// 3. Remove the one in the third position.

console.log("--Exercise #3--");
console.log(animals);
animals.splice(2,1);
console.log(animals);

// 4. Create a set that stores five books.

console.log("--Exercise #4--");
let library = new Set(["All Quiet on the Western Front.", "The knight with the rusty armor.", "The Time Machine.", "The Gold Bug.", "The Happy Prince."]);
console.log(library);

// 5. Add two more. One of them a duplicate.

console.log("--Exercise #5--");
console.log(library);
library.add("The Three Wishes.");
library.add("The Little Tin Soldier.");
library.add("The Little Tin Soldier.");
console.log(library);

// 6. Remove a specific one of your choice.

console.log("--Exercise #6--");
console.log(library.delete("The Gold Bug."));
console.log(library);

// 7. Create a map that associates the month number with its name.

console.log("--Exercise #7--");
let months = new Map ([
    [1, "January"],
    [2, "February"],
    [3, "March"],
    [4, "April"],
    [5, "May"],
    [6, "June"],
    [7, "July"],
    [8, "August"],
    [9, "September"],
    [10, "October"],
    [11, "November"],
    [12, "December"]
])

// 8. Check if month number 5 exits in the map and print its value.

console.log("--Exercise #8--");
console.log(months.has(5));

console.log(months.get(5));


// 9. Add a key to the map with an array that stores the summer months.

console.log("--Exercise #9--");
months.set("summer", ["June", "July", "August"]);

console.log(months);

// 10. Create an array, convert it to a set, and store it in a map.

console.log("--Exercise #10--");
let arrayAnimes = ["My Hero Academia", "Naruto", "Fire Force", "Tokyo Ghoul", "Darling in the Franxx"];
console.log(arrayAnimes);

let setAnimes = new Set(arrayAnimes);
console.log(setAnimes);

let mapAnimes = new Map();
mapAnimes.set("animes_list", setAnimes);
console.log(mapAnimes);