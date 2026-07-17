// Array

// Declaration

let myArray = [];
let myArray2 = new Array();

//Inicialization

console.log(myArray);
console.log(myArray2);

myArray = [1, 2, 3, 4];
myArray2 = new Array(1, 2, 3, 4);

console.log(myArray);
console.log(myArray2);

myArray = ["Giovanny", "Osorio", "Aiden", 37, true];
myArray2 = new Array("Giovanny", "Osorio", "Aiden", 37, true);

console.log(myArray);
console.log(myArray2);

myArray2 = new Array(3);
myArray2[0] = "Giovanny";
myArray2[1] = "Osorio";
myArray2[2] = "Aiden";

console.log(myArray2);

myArray2 = new Array(3);
myArray2[2] = "Giovanny";
myArray2[0] = "Osorio";
myArray2[1] = "Aiden";
myArray2[4] = "Aiden";

console.log(myArray2);

myArray = [];
myArray[2] = "Giovanny";
myArray[0] = "Osorio";
myArray[1] = "Aiden";

console.log(myArray);

// Common methods

myArray = [];

// Push and pop

myArray.push("GitHub");
myArray.push("JavaScript");
myArray.push("24");
myArray.push(24);

console.log(myArray);

console.log(myArray.pop()); // Removes the last element and returns it
myArray.pop();

console.log(myArray);

// Shift

console.log(myArray.shift()); // Removes the first element and returns it
console.log(myArray);

myArray.unshift("GitHub","Python", "Java");
console.log(myArray);

// Length

console.log(myArray.length);

// Clear

// myArray = [];
// myArray.length = 0; //Alternative
console.log(myArray);

// Slice

myArray = ["Giovanny", "Osorio", "Aiden", 37, true];

console.log(myArray);

let myNewArray = myArray.slice(1, 3);

console.log(myNewArray);

// Splice

console.log("--Splice--");
myNewArray = myArray.splice(1, 3);

console.log(myNewArray);

myArray = ["Giovanny", "Osorio", "Aiden", 37, true];

console.log(myArray);

myNewArray = myArray.splice(1, 0, 3);

console.log(myNewArray);

