// NOTE: Explore different loops syntaxes to solve the exercises.

// 1. Create a loop that prints the numbers from 1 to 20.

console.log("--Exercise #1--");

let i = 1;

while (i <= 20) {
    console.log(i);
    i++;
}

// 2. Create a loop that adds up all the numbers from 1 to 100 and displays the result.

console.log("--Exercise #2--");

let result = 0;

for (let i = 0; i <= 100; i++) {
    result = result + i;
}

console.log(`Reuslt of the addition: ${result}`);

// 3. Create a loop that prints all even numbers between 1 and 50.

console.log("--Exercise #3--");

let number = 2;

while (number <= 50) {
    number += 2;
    console.log(number);
}

// 4. With an array of name, use a loop to print each name to the console.

console.log("--Exercise #4--");

let namesList = ["Aiden", "Mark", "James", "Daniel", "Max"];

for (let value of namesList) {
    console.log(value);
}

// 5. Create a loop that counts the number of vowels in a string.

console.log("--Exercise #5--");

let sentence = "London is the capital of England."
let vowels = 0;

for (let value of sentence.toLowerCase()) {
    if (value == "a" || value == "e" || value == "i" || value == "o" || value == "u") {
        vowels++;
    }
    else {
        continue;
    }
}

console.log(vowels);

// 6. With an array of numbers, use a loop to multiply all the numbers and display the product.

console.log("--Exercise #6--");

let arrayNumbers = [2, 4, 6, 8, 10, 12, 14, 16];

let multiplication = 1;

for (let i = 0; i < arrayNumbers.length; i++) {
    multiplication *= arrayNumbers[i];
}

console.log(multiplication);

// 7. Create a loop that prints out the 5 times table.

console.log("--Exercise #7--");

i = 1;

console.log("--5 times table.--");

while (i <= 12) {
    console.log(`5 x ${i} = ${(5 * i)}`);
    i++;
}

// 8. Use a loop to reverse a string.

console.log("--Exercise #8--");

let phrase = "Don't give up.";
let reversedPhrase = "";

console.log(`Phrase: ${phrase}`);

for (let value of phrase) {
    reversedPhrase = value + reversedPhrase;
}

console.log(`Reversed Phrase: ${reversedPhrase}`);

// 9. Use a loop to generate the first 10 numbers in the Fibonacci sequence.

console.log("--Exercise #9--");
console.log("Fibonacci Sequence.");

let firstNumber = 0;
let secondNumber = 1;
let next = 0;

console.log(firstNumber);
console.log(secondNumber);

for (let i = 0; i <= 7; i++) {
    next = firstNumber + secondNumber;
    firstNumber = secondNumber;
    secondNumber = next;
    console.log(next);
}

// 10. With an array of numbers, use a loop to create a new array contanining only the numbers greater than 10.

console.log("--Exercise #10--");

arrayNumbers = [1, 6, 3, 10, 2, 11, 4, 18, 7, 5, 22, 8, 9, 16, 0, 14, 6, 25, 3, 12];

let newArrayNumbers = [];

for (let value of arrayNumbers) {
    if (value > 10) {
        newArrayNumbers.push(value);
    }
}

console.log(newArrayNumbers);
