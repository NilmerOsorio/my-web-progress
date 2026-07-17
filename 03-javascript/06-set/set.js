// Set

// Declaration

let mySet = new Set();

console.log(mySet);

// Inicialization

mySet = new Set(["Giovanny", "Osorio", "Aiden", 37, true, "giovanny@gmail.com"]);

console.log(mySet);

// Common methods

// add and delete

mySet.add("GitHub");

console.log(mySet);

mySet.delete("GitHub");

console.log(mySet);

console.log("--Delete--");

console.log(mySet.delete("Osorio"));
console.log(mySet.delete(4));

console.log(mySet);

// has

console.log(mySet.has("Giovanny"));
console.log(mySet.has("GitHub"));

// size

console.log(mySet.size);

// convert a set into an array

let myArray = Array.from(mySet);

console.log(myArray);

// convert an array into a set
 
mySet = new Set(myArray);

console.log(mySet);

// Set doesn't allow duplicated values.

mySet.add("Aiden");
mySet.add("Aiden");
mySet.add("AIDEN");

console.log(mySet);






