// Objects

// Syntax

let person = {
    name: "Giovanny",
    age: "24",
    alias: "GioDev"
};

// Access to properties

// Dot notation
console.log(person.name);

// Bracket notation
console.log(person["name"]);

// Properties modification

person.name = "Aiden";
console.log(person.name);

console.log(typeof person.age);
person.age = 24;
console.log(person.age);
console.log(typeof person.age);

// Removal of properties

delete person.age;

console.log(person);

// New propertie

person.email = "giovanny@email.com";

console.log(person);

person["age"] = 24;

console.log(person);

// Methods (functions)

let person2 = {
    name: "Giovanny",
    age: "24",
    alias: "GioDev",
    walk: function () {
        console.log("Walking ...");
    }
};

person2.walk();

// Object Nesting

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

console.log(person3);

console.log(person3.name);
console.log(person3.job);
console.log(person3.job.name);
person3.job.work();

// Equlity of objects

let person4 = {
    name: 'Aiden',
    alias: 'GioDev',
    email: 'giovanny@email.com',
    age: 24
};

console.log(person);
console.log(person4);

console.log(person == person4);
console.log(person === person4);

console.log(person.name == person4.name);

// Iteration

for (let value in person4) {
    console.log(value);
}

for (let key in person4) {
    console.log(key + ": " + person4[key]);
}

// Functions as objects

function Person(name, age) { // It should be a class
    this.name = name;
    this.age = age;
}

let person5 = new Person("Aiden", 24);
console.log(person5);
console.log(person5.name);

console.log(typeof person5);
console.log(typeof person4);