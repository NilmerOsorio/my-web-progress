// 1. Concatenates two text strings.
console.log("--Exercise #1--");
let programmingLanguage = "JavaScript";
let secondProgrammingLanguage = "Java";

console.log("Some of the programming languages I'm using currently is [" + programmingLanguage + "] and [" + secondProgrammingLanguage + "]");

// 2. Displays the length of a text string.
console.log("--Exercise #2--");
let message = "C was one the first programming languages";
console.log(message.length);


// 3. Display the first and last character of a string.
console.log("--Exercise #3--");
let secondMessage = "Programming isn't about what you know; it's about what you can figure out.";
console.log(secondMessage[0]);
console.log(secondMessage[73]);

// 4. Converts a string to uppercase a lowercase.
console.log("--Exercise #4--");
let thirdMessage = "When progress feels slow, stay patient and keep working hard.";
console.log(thirdMessage.toUpperCase());
console.log(thirdMessage.toLowerCase());

// 5. Create a multi-line text string.
console.log("--Exercise #5--");
let quote = `Every doubts takes
away confidence.
Believe in yourself`
console.log(quote);

// 6. Interpolate the value of a variable into a string.
console.log("--Exercise #6--");
programmingLanguage = "JavaScript";
secondProgrammingLanguage = "Java";

console.log(`Some of the programming languages I'm using currently is [${programmingLanguage}] and [${secondProgrammingLanguage}]`);


// 7. Replaces all spaces in a string with hyphens.
console.log("--Exercise #7--");
message = "C was one the first programming languages";

console.log(message.replaceAll(" ","-"));

// 8. Checks if a text string contains a specific word.
console.log("--Exercise #8--");
console.log(message.includes("C"));
console.log(message.includes("C++"));

// 9. Checks if two strings are equal.
console.log("--Exercise #9--");
message = "C was one the first programming languages";
thirdMessage = "When progress feels slow, stay patient and keep working hard.";

console.log(message === thirdMessage);


// 10. Check if two strings have the same length.
console.log("--Exercise #10--");
message = "C was one the first programming languages";
thirdMessage = "When progress feels slow, stay patient and keep working hard.";

console.log(message.length == thirdMessage.length);