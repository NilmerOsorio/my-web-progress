// In this I did some exercises to practice what I learnt about JavaScript.

// 1. Write a comment in one line 
// Programming is not about never failing; it's about never giving up.

// 2. Write a comment in multiple lines
/*
Remember:
 - Programming is not a race.
 - Every bug you solve is progress.
 - Every line you write makes you better.
 - The only programmer you're competing with
   is the one you were yesterday.
*/

// 3. Declare variables with associated values with all primitive data types.
let number = 2;
let biginit = BigInt(67676767676767676767);
let string = "Hello World";
let boolean = true;
let second_boolean = false;
let null_value = null;
let undefined_value;
let symbol = Symbol("02");

// 4. Print the value of all variables to the console.

console.log(number);
console.log("------------------");
console.log(biginit);
console.log("------------------");
console.log(string);
console.log("------------------");
console.log(boolean);
console.log(second_boolean);
console.log("------------------");
console.log(null_value);
console.log("------------------");
console.log(undefined_value);
console.log("------------------");
console.log(symbol);
console.log("------------------");

// 5. Print the type of all variables to the console.

console.log("------------------");
console.log(typeof number);
console.log("------------------");
console.log(typeof biginit);
console.log("------------------");
console.log(typeof string);
console.log("------------------");
console.log(typeof boolean);
console.log(typeof second_boolean);
console.log("------------------");
console.log(typeof null_value);
console.log("------------------");
console.log(typeof undefined_value);
console.log("------------------");
console.log(typeof symbol);
console.log("------------------");

// 6. Modify the values of the variables to others of the same type.

number = 4;
biginit = BigInt(989898989898989898989898);
string = "You can be the greatest";
boolean = false;
second_boolean = true;
symbol = Symbol("24");
undefined_value = "Hello World"
null_value = true;

// 7. Modify the values of the variables to others of different type.

number = "Hello World";
biginit = 89;
boolean = Symbol("02");
second_boolean = BigInt(6767676767676767);
symbol = 0.2;

// 8. Declare constants with values associated with all primitive data types.

const number_2 = 0.2;
const biginit_2 = BigInt(2424242424242424);
const boolean_2 = true;
const symbol_2 = Symbol("84");
const string_2 = "Programming isn't a race."

/*
I didn't use in this exercise the variables [null_value] and 
[undefined_value] because they'll always have the same value.
*/

// 9. Modify the values of the constants.

number_2 = 24; // It will cause an error because we can't modify a constant variable.
console.log(number_2); 
biginit_2 = BigInt(54545454545454); // It will cause an error because we can't modify a constant variable.
console.log(biginit_2); 
boolean_2 = false; // It will cause an error because we can't modify a constant variable.
console.log(boolean_2);
symbol_2 = Symbol("98"); // It will cause an error because we can't modify a constant variable.
console.log(symbol_2); 
string_2 = "Hello World"; // It will cause an error because we can't modify a constant variable.
console.log(string_2); 

// 10. Comment out the lines that cause an error when executed.

// 10. Comment out the lines that cause an error when executed.


// number_2 = 24;
// biginit_2 = BigInt(54545454545454);
// boolean_2 = false;
// symbol_2 = Symbol("98");
// string_2 = "Hello World";

console.log(number_2);
console.log(biginit_2);
console.log(boolean_2);
console.log(symbol_2);
console.log(string_2);

