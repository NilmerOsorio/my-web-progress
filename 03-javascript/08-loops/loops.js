// Loops

// for

for (let i = 0; i < 5; i++) {
    console.log(`Hello ${i}.`);
}

const numbers = [1, 2, 3, 4, 5, 6, 7, 8];

for (let i = 0; i < numbers.length; i++) {
    console.log(`Element: ${numbers[i]}`);
}

// while

let i = 0;

while (i < 5) {
    console.log(`Hello ${i}.`);
    i++;
}

// endless loop

/*
    while (true) {

    }
*/

// do while

i = 6;

do {
   console.log(`Hello ${i}.`);
    i++;
} while (i < 5)

// for of

myArray = ["Giovanny", "Osorio", "Aiden", 37, true];

mySet = new Set(["Giovanny", "Osorio", "Aiden", 37, true, "giovanny@gmail.com"]);

myMap = new Map([
    ["name", "Giovanny"],
    ["email", "giovanny@gmail.com"],
    ["age", "24"]
]);

myString = "Hello JavaScript";

for (let value of myArray) {
    console.log(value);
}

for (let value of mySet) {
    console.log(value);
}

for (let value of myMap) {
    console.log(value);
}

for (let value of myString) {
    console.log(value);
}

// Best practices

// break and continue

for (let i = 0; i < 10; i++) {

    if (i == 5) {
        continue;
    }
    else if (i == 8) {
        break;
    }

    console.log(`Hello ${i}.`);
}
