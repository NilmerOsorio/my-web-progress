// Classes

class Person {
    constructor(name, age, alias) {
        this.name = name;
        this.age = age;
        this.alias = alias;
    }
}

// Syntax

let person = new Person("Giovanny", 24, "GioDev");
let person2 = new Person("Giovanny", 24, "GioDev");

console.log(person);
console.log(person2);

console.log(typeof person);

// Values by default

class DefaultPerson {
    constructor(name = "Without name", age = 0, alias = "Without alias") {
        this.name = name;
        this.age = age;
        this.alias = alias;
    }
}

let person3 = new DefaultPerson("Giovanny", 24);

console.log(person3);

// Access to properties

console.log(person3.alias);
console.log(person3["alias"]);

person3.alias = "GioDev";
console.log(person3.alias);

// Functions

class PersonWithMethods {
    constructor(name, age, alias) {
        this.name = name;
        this.age = age;
        this.alias = alias;
    }
    walk() {
        console.log("The person is walking ...");
    }
}

let person4 = new PersonWithMethods("Aiden", 32, "Vigilante");
person4.walk();

// Private properties

class PrivatePerson {

    #bank;

    constructor(name, age, alias, bank) {
        this.name = name;
        this.age = age;
        this.alias = alias;
        this.#bank = bank;
    }
    pay() {
        this.#bank;
    }
}

let person5 = new PrivatePerson("Giovanny", 24, "GioDev", "DED854789");

// We can't access
// console.log(person5.#bank); 
// person5.bank = "JUEH784256"; // bank isn't #bank

console.log(person5);

// Getters and Setters

class GetSetPerson {

    #name;
    #age;
    #alias;
    #bank;
    
    constructor(name, age, alias, bank) {
        this.#name = name;
        this.#age = age;
        this.#alias = alias;
        this.#bank = bank;
    }

    get name() {
        return this.#name;
    }

    set bank(newBank) {
        this.#bank = newBank;
    }

}

let person6 = new GetSetPerson("Giovanny", 24, "GioDev", "DED854789");

console.log(person6);
console.log(person6.name);

person6.bank = "JHEUG854269";
console.log(person6.bank);

// Inheritance

class Animal {
    constructor(name){
        this.name = name;
    }

    sound(){
        console.log("Making a sound ...");
    }
}

class Dog extends Animal{
    sound(){
        console.log("Guau!");
    }
    run(){
        console.log("Runing ...");
    }
}

class Fish extends Animal{
    constructor (name,size){
        super(name);
        this.size = size;
    }
    swim(){
        console.log("Swimming ...");
    }
}

let myDog = new Dog("Rocky");
myDog.run();
myDog.sound();

let myFish = new Fish("Nemo", 10);
myFish.swim();
myFish.sound();

// Static Methods

class MathOperations {
    static sum(a,b){
        return a+b;
    }
}

console.log(MathOperations.sum(5,10));