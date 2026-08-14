// NOTE: Explore different functions syntaxes to solve the exercises.

// 1. Create a function that takes two numbers and returns their sum.

console.log("--Exercise #1--");

function sum(a, b) {
    return a + b;
}

let result = sum(10, 20);
console.log(result);

// 2. Create a function that receives an array of numbers and returns the largest one.

console.log("--Exercise #2--");

let arrayNumbers = [2, 24, 88, 98, 52, 36, 28];
console.log(arrayNumbers);

function largestNumber(arrayNumbers) {

    let number = arrayNumbers[0];

    arrayNumbers.forEach(function (value) {
        if (value > number) {
            number = value;
        }
    });
    return number;
}

console.log("The largest number in the array is:");
console.log(largestNumber(arrayNumbers));

// 3. Create a function that takes a string and returns the number of vowels it contains.

console.log("--Exercise #3--");

let sentence = "London is the capital of England.";
console.log(sentence);

let numberOfVowels = function (sentence) {

    let count = 0;

    sentence.toLocaleLowerCase().split("").forEach(function (value) {
        if (value == "a" || value == "e" || value == "i" || value == "o" || value == "u") {
            count++;
        }
    });

    return count;
}

console.log(numberOfVowels(sentence));

// 4. Create a function that takes an array of strings and returns a new array with the strings in uppercase.

console.log("--Exercise #4--");

console.log("Before the uppercase:");
let arrayStrings = ["Deer", "Apple", "Artiodactyl", "Stumbling", "Shivering"];
console.log(arrayStrings);

function upperCase(arrayStrings) {
    return arrayStrings.map(word => word.toUpperCase());
}

console.log("After the uppercase:");
console.log(upperCase(arrayStrings));

// 5. Create a function that takes a number and returns true if it is prime, and false otherwise.

console.log("--Exercise #5--");

let checkNumber = function (number) {
    if (number < 2) {
        return false;
    }
    else {
        for (let i = 2; i <= number - 1; i++) {
            if (number % i == 0) {
                return false;
            }
        }
        return true;
    }
}

console.log(checkNumber(96));

// 6. Create a function that takes two arrays and returns a new array containing the common element between them.

console.log("--Exercise #6--");

console.log("First Array:");
let firstArray = ["Hello", 24, true, "JavaScript", 59];
console.log(firstArray);

console.log("Second Array:");
let secondArray = ["JavaScript", "Apple", 24, "Hi", false];
console.log(secondArray);

function commonElements(firstArray, secondArray) {

    let newArray = [];

    for (let i = 0; i < firstArray.length; i++) {
        if (secondArray.includes(firstArray[i])) {
            newArray.push(firstArray[i]);
        }
    }
    return newArray;
}

console.log("Common Element among the arrays:");
console.log(commonElements(firstArray, secondArray));

// 7. Create a function that takes an array of numbers and returns the sum of all even numbers.

console.log("--Exercise #7--");

arrayNumbers = [2, 4, 5, 7, 8, 24, 9, 11, 13];
console.log(arrayNumbers);

let addition = function (arrayNumbers) {

    let result = 0;

    arrayNumbers.forEach(function (value) {
        if (value % 2 == 0){
            result += value;
        }
    });

    return result;
}

console.log("Addition of all even numbers:");
console.log(addition(arrayNumbers));

// 8. Create a function that takes an array of numbers and returns a new array with each number squared.

console.log("--Exercise #8--");

arrayNumbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
console.log(arrayNumbers);

let squaredNumbers = function (arrayNumbers) {
    return arrayNumbers.map(number => number**2);
}

console.log("New array with each number squared:");
console.log(squaredNumbers(arrayNumbers));

// 9. Create a function that receives a text string and returns the same string with the words in reverse order.

console.log("--Exercise #9--");

console.log("Before being reversed:");
let quote = "Sit on a potato pan, Otis.";
console.log(quote);

let reversedSentence = function (quote) {
    return quote.split(" ").reverse().join(" ");
}
console.log();
console.log("After being reversed:");
console.log(reversedSentence(quote));

// 10. Create a function that calculates the factorial of a given number.

console.log("--Exercise #10--");

console.log("Number given to make the factorial:");
let number = 4;
console.log(number);

function factorial (number) {

    let factorialNumber = 1;

    for (let i = 1; i <= number; i++) {
        factorialNumber *= i;
    }

    return factorialNumber
}

console.log("Factorial of the given number:");
console.log(factorial(number));


