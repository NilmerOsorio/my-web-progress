// Operators

// Arithmetic operators

let a = 5;
let b = 10;

console.log(a + b); // Addition
console.log(a - b); // Subtraction
console.log(a * b); // Multiplication
console.log(a / b); // Division

console.log(5 % 10); //Module
console.log(5 ** 10); //Exponential

a++ // Increase
console.log(a++);

b-- // Decrement
console.log(b--);

// Assignment operators

let myVariable = 0.2;
console.log(myVariable);
myVariable += 2
console.log(myVariable);

myVariable -= 2;
myVariable *= 2;
myVariable /= 2;
myVariable %= 2;
myVariable **= 2;

// Comparison operators

console.log(a);

console.log(a > b);
console.log(a < b);
console.log(10 >= 10);
console.log(a <= b);
console.log(a == b);
console.log(a == 5); // Equality of value
console.log(a == "5"); // Equality of value
console.log(a == a);
console.log(a === 5); // Equality by identity (by type and value)
console.log(a === "5");
console.log(a != 7);
console.log(a !== "7");
console.log(0 == false);
console.log(1 == false);
console.log(2 == false);
console.log(0 == "");
console.log(0 == " ");
console.log(0 == '');
console.log(0 == "Hello");
console.log(undefined == null);
console.log(undefined === null);

// Truthy values
// Every string except empty strings
// True boolean

// Falsy values
//0
//0n
//null
//undefined
//NaN
//False boolean
//Empty strings

// Logical operators

// and(&&)
console.log(5 > 10 && 15 > 20);
console.log(5 < 10 && 15 < 20);
console.log(5 < 10 && 15 > 20);
console.log(5 > 10 && 15 > 20 && 30 > 40);

// or (||)
console.log(5 > 10 || 15 > 20);
console.log(5 < 10 || 15 < 20);
console.log(5 < 10 || 15 > 20);
console.log(5 > 10 || 15 > 20 || 30 > 40);

console.log(5 > 10 && 15 > 20 || 30 < 40);

// not (!)
console.log(!true);
console.log(!false);
console.log(!(5 > 10 && 15 > 20));
console.log(!(5 > 10 || 15 > 20));

// Ternary operators
const isRaining = true;

isRaining ? console.log("It's raining") : console.log("It's not raining");

