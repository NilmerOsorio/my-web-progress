// 1. Create an object with 3 properties.
console.log("--Exercise #1--");

let user = {
    name: "Adam",
    age: "32",
    programmingLanguage: "JavaScript",
}

console.log(user);
console.log();

// 2. Access its value and print it.

console.log("--Exercise #2--");

console.log(user.name);
console.log(user.age);
console.log(user.programmingLanguage);
console.log();

// 3. Add a new property.

console.log("--Exercise #3--");

user.profileJob = "Web Developer.";
user.favouriteColour = "Blue";

console.log(user);
console.log();

// 4. Delete one of the 3 properties.

console.log("--Exercise #4--");

delete user.age;
console.log(user);
console.log();

// 5. Add a function and call it.

console.log("--Exercise #5--");

user.work = function(){
    console.log(`${this.name} is working ...`);
}

console.log(user);
user.work();
console.log();

// 6. Iterate through the object's properties.

console.log("--Exercise #6--");

for (let key in user) {
    console.log(key + " : " + "[" + user[key] + "]");
}

console.log();

// 7. Create a nested object.

console.log("--Exercise #7--");

let user1 = {
    userName: "Daniel",
    age: 32,
    language: "English",
    secondLanguage: {
        name: "German",
        talk: function () {
            console.log("Hallo");
        }
    }
}

console.log(user1);

// 8. Access and display the values of nested properties.

console.log("--Exercise #8--");

console.log(user1);
console.log(user1.secondLanguage);
console.log(user1.secondLanguage.name);
user1.secondLanguage.talk();

console.log();

// 9. Check whether the two objects created are the same.

console.log("--Exercise #9--");

let person1 = {
    name: "Adam",
    age: 32,
    programmingLanguage: "JavaScript",
}

let person2 = {
    name: "Adam",
    age: 32,
    programmingLanguage: "JavaScript",
}

console.log(person1 == person2);
console.log(person1 === person2);

console.log();

// 10. Check whether two different properties are the same.

console.log("--Exercise #10--");

console.log(person1.name == person2.age);
console.log(person1.name === person2.name);
console.log(person1.programmingLanguage == person2.age);
console.log(person1.programmingLanguage === person2.age);