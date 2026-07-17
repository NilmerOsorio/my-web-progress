// Map

// Declaration

let myMap = new Map();

console.log(myMap);

// Initialization

myMap = new Map([
    ["name", "Giovanny"],
    ["email", "giovanny@gmail.com"],
    ["age", "24"]
]);

console.log(myMap);

// Common methods

// set

myMap.set("alias","Giovanny24");
myMap.set("name", "Giovanny Osorio");

console.log(myMap);

// get

console.log(myMap.get("name"));
console.log(myMap.get("surname"));

// keys and values

console.log(myMap.keys());
console.log(myMap.values());

// has

console.log(myMap.has("surname"));
console.log(myMap.has("age"));

//entries

console.log(myMap.entries());

// size

console.log(myMap.size);

// delete

myMap.delete("age");

console.log(myMap);

// clear

myMap.clear();

console.log(myMap);



