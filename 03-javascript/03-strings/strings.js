// Strings

// String concatenation

let myName = "Giovanny";
let greeting = "Hi, " + myName + "!";

console.log(greeting);
console.log(typeof greeting);

// Length

console.log(greeting.length);

// Character access

console.log(greeting[0]);
console.log(greeting[1]);
console.log(greeting[13]);

// Common methods

console.log(greeting.toUpperCase());
console.log(greeting.toLowerCase());
console.log(greeting.indexOf("Hi"));
console.log(greeting.indexOf("Giovanny"));
console.log(greeting.indexOf("GitHub"));
console.log(greeting.includes("Hi"));
console.log(greeting.includes("Giovanny"));
console.log(greeting.includes("GitHub"));
console.log(greeting.slice(0, 10));
console.log(greeting.replace("Giovanny", "Aiden Pearce"));


// Template literals

let message = `Hi, 
this is one
of my files 
practicing 
JavaScript`

console.log(message);

let email = "gyovanny@gmail.com";

console.log(`Hi, ${myName}! Your email is ${email}.`);
