// 1. Create a class that has two properties.

console.log("--Exercise #1--");

class Car {
    constructor(brand, year) {
        this.brand = brand;
        this.year = year;
    }
}

console.log("Exercise done.");

console.log();

// 2. Add a method to the class that uses the properties.

console.log("--Exercise #2--");

class Car2 {
    constructor(brand, year) {
        this.brand = brand;
        this.year = year;
    }
    showingBrand() {
        console.log(`The brand is [${this.brand}]`);
    }
    showingYear() {
        console.log(`The year is [${this.year}]`);
    }
}

console.log("Exercise done.");

console.log();

// 3. Displays the property values and class the function.

console.log("--Exercise #3--");

let firstCar = new Car2("Bugatti", 2014);
console.log(firstCar);

firstCar.showingBrand();
firstCar.showingYear();

console.log();

// 4. Add a static method to the first class.

console.log("--Exercise #4--");

Car.running = function () {
    console.log(`The car is running on the road ...`);
}

console.log("Exercise done.");

console.log();

// 5. Use the static method.

console.log("--Exercise #5--");

Car.running();

console.log();

// 6. Create a class that makes use of inheritance.

console.log("--Exercise #6--");

class Animal {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
    eat(){
        console.log("Eating ...");
    }
}

class Dog extends Animal {
    constructor (name, age, breed){
        super(name, age);
        this.breed = breed;
    }
    barking(){
        console.log("Guau!");
    }
}

let Dog1 = new Dog("Charlie", 8, "Yorkshire Terrier");

console.log("--Object created with the class Dog, which inherits the attributes from the class Animal--");
console.log(Dog1);
console.log();

console.log(`Name -- ${Dog1.name}`);
console.log(`Age -- ${Dog1.age}`);
console.log(`Breed - ${Dog1.breed}`);
console.log();

console.log("--Method barking() -- from the class Dog--");
Dog1.barking();

console.log();

// 7. Create a class that uses getters and setters.

console.log("--Exercise #7--");

class Account {

    #password;
    #bankId;

    constructor (userName, password, bankID) {
        this.userName = userName;
        this.#password = password;
        this.#bankId = bankID;
    }
 
    get name() {
        return this.name;
    }

    set password(newPassword) {
        console.log(`The new password is = [${newPassword}]`);
    }

    set bankID(newBankId) {
        console.log(`The new Bank ID is = [${newBankId}]`);
    }
}

console.log("Exercise done.");

console.log();

// 8. Modify the class with getters and setters so that it uses private properties.

console.log("--Exercise #8--");

console.log("This exercise was already done in the last one.");

console.log();

// 9. Use the get and set methods and display their values.

console.log("--Exercise #9--");

let newUser = new Account ("JhonMiller", 123456789, "JUEDGH768");

console.log("--Onbject created with the class Account--");
console.log(newUser);
console.log();
console.log("--We can't see his other attributes because they're privates.--");
console.log();

console.log(`--However, it's possible to modify their value
since we made two sets for each one of these
atributes--`);

console.log();

newUser.password = "789456";
newUser.password;

newUser.bankID = "JEUFYTH987425";
newUser.bankID;

console.log();

// 10. Override a method of a class that uses inheritance.

console.log("--Exercise #10--");

class Animal2 {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
    eat(){
        console.log("Eating ...");
    }
}

class Dog2 extends Animal2 {
    constructor (name, age, breed){
        super(name, age);
        this.breed = breed;
    }
    barking(){
        console.log("Guau!");
    }
    eat(){
        console.log("Nom nom, Dog Food!");
    }
}

let firstDog = new Dog2("Bowser", 8, "French Bulldog");

console.log("--Object created with the class Dog, which inherits the attributes from the class Animal--");
console.log(firstDog);
console.log();

console.log(`Name -- ${firstDog.name}`);
console.log(`Age -- ${firstDog.age}`);
console.log(`Breed - ${firstDog.breed}`);
console.log();

console.log("--The inherited method eat() from the class [Animal2] was overridden in the child class [Dog2]--");

firstDog.eat();
