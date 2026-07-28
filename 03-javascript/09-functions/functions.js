// Functions

function myFunction() {
    console.log("Hello function");
}

for (let i = 0; i < 5; i++) {
    myFunction();
}

// With parameters

function myFunctionWithParameters(name) {
    console.log(`Hello ${name}`);
}

myFunctionWithParameters("Nilmer");
myFunctionWithParameters("Osorio");

// Anonymous functions

const mySecondFunction = function (name) {
    console.log(`Hello ${name}`);
}

mySecondFunction("Nilmer Osorio");

// Arrow functions

const myThirdFunction = (name) => {
    console.log(`Hello ${name}`);
}

const myFourthFunction = (name) => console.log(`Hello ${name}`);

myThirdFunction("Nilmer Osorio");
myFourthFunction("Nilmer Osorio");

// Parameters

function sum(a, b) {
    console.log(a + b);
}

sum(5, 5);
sum(5);
sum();

// By default

function defaultSum(a = 0, b = 0) {
    console.log(a + b);
}

defaultSum();
defaultSum(5);
defaultSum(5, 5);
defaultSum(b = 5);

// Return

function multiplication(a, b) {
    return a * b;
}

let result = multiplication(5, 10)
console.log(result);

// Nested functions

function extern() {
    console.log("External function.");
    function intern() {
        console.log("Internal function.");
    }
    intern();
}

extern();
// intern(); Error: out of scope

// Higher-order functions

function applyFunction(func, param) {
    func(param);
}

applyFunction(myFourthFunction, "Higher-order function.");

// forEach

myArray = ["Giovanny", "Osorio", "Aiden", 37, true];

mySet = new Set(["Giovanny", "Osorio", "Aiden", 37, true, "giovanny@gmail.com"]);

myMap = new Map([
    ["name", "Giovanny"],
    ["email", "giovanny@gmail.com"],
    ["age", "24"]
]);

myArray.forEach(function (value) {
    console.log(value);
});

myArray.forEach((value) => console.log(value));

mySet.forEach((value) => console.log(value));

myMap.forEach((value) => console.log(value));

