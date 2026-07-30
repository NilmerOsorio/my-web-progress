let myArray = [1, 2, 3];

let person = {
    name: "Giovanny",
    age: "24",
    alias: "GioDev"
};

let myValue = myArray[1];
console.log(myValue);

let myName = person.name;
console.log(myName);

// Destructuring

console.log("Destructuring:");

// Syntax in Arrays

console.log("Syntax in Arrays:");

let [myValue0, myValue1, myValue2, myValue3, myValue4] = myArray;

console.log(myValue0);
console.log(myValue1);
console.log(myValue2);
console.log(myValue3);
console.log(myValue4);

// Syntax in Arrays with default values

console.log("Syntax in Arrays with default values:");

let [myValue5 = 0, myValue6 = 0, myValue7 = 0, myValue8 = 0, myValue9 = 0] = myArray;

console.log(myValue5);
console.log(myValue6);
console.log(myValue7);
console.log(myValue8);
console.log(myValue9);

// Ignoring array elements

console.log("Ignoring array elements:");

let [myValue10 = 0, , , myValue13 = 0] = myArray;

console.log(myValue10);
console.log(myValue13);

// Syntax with objects

console.log("Syntax with objects:");

let {name, age, alias}  = person;

console.log(name);
console.log(age);
console.log(alias);

// Syntax in Objects with default values

let {name2, age2, alias2, email = "email@email.com"}  = person;

console.log(name2); // It doesn't exist.
console.log(age2); // It doesn't exist.
console.log(alias2); // It doesn't exist.
console.log(email); 

// Syntax in Object with new variable names

console.log("Syntax in Object with new variable names:");

let {alias: alias3, name: name3, age: age3}  = person;

console.log(name3);
console.log(age3);
console.log(alias3);

// Nested Objects

let person3 = {
    name: "Giovanny",
    age: "24",
    alias: "GioDev",
    walk: function () {
        console.log("Walking ...");
    },
    job: {
        name: "Software Developer",
        exp: 2,
        work: function () {
            console.log(` This person with ${this.exp} years of experience is working ...`);
        }
    }
};

let {name: name4, job: { name: jobName}} = person3;

console.log(name4);
console.log(jobName);

// Spreading (...)

// Syntax in Array

console.log("Syntax in Array");

let myArray2 = [...myArray, 5, 6];

console.log(myArray2);

// Arrays copy

let myArray3= [...myArray]; // Copy

console.log(myArray3);

// Arrays combination

let myArray4 = [...myArray,... myArray2, ...myArray3];

console.log(myArray4);

// Syntax in Objects

let person4 = {...person, email: "giovanny@email.com" };

console.log(person4);

// Objects copy

let person5 = {...person};

console.log(person5);
