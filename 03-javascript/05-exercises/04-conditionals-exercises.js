// If, else if, else, ternary operator

// 1. Print your name to the console if a variable takes on its value.

let myName = "Giovanny";

if (myName === "Giovanny" && myName.toLowerCase() === "giovanny" && myName.toUpperCase() === "GIOVANNY") {
    console.log("Yeah, it's my name.");
}
else {
    console.log("No, definitely it's not my name.");
}

// 2. Print a message to the console if the username and password match the established ones.

let username = "Axel98024";
let password = "HelloWorld";

if (username == "Axel98024" && password == "HelloWorld") {
    console.log("Welcome");
}
else {
    console.log("Failed login attempt.");
}

// 3. Checks wheter a number is positive, negative, or zero and prints a message.

let number = 24;

if (number > 0) {
    console.log("The number is positive.");
}
else if (number < 0) {
    console.log("The number is negative.");
}
else {
    console.log("It's zero.");
}

// 4. Checks whether or not a person is eligible to vote (over 18) and indicate how many years remain until he is.

let age = 18;

if (age >= 18) {
    console.log("This person is allowed to vote.");
}
else {
    let remainAge = (18-age);
    console.log("This person isn't allowed to vote.");
    console.log(`He would be allowed to vote in ${remainAge} years.`);
}

// 5. Use the ternary operator to assign the value "Adult" o "Under-age" to a variable based on age.

let secondAge = 17;

let categoryAge = secondAge >= 18 ? "Adult" : "Under-age";

console.log(categoryAge);


// 6. Display the current season based on the value of a "month" variable.

let month = 2;

switch (month) {
    case 12:
    case 1:
    case 2:
        console.log("It's winter");
        break
    case 3:
    case 4:
    case 5:
        console.log("It's spring.");
        break
    case 6:
    case 7:
    case 8:
        console.log("It's summer");
        break
    case 9:
    case 10:
    case 11:
        console.log("It's autumn.");
        break
    default:
        console.log("Invalid data.");
}

// 7. Display the number of days in a month depending on the variable from the previous exercise.

if (month == 1 || month == 3 || month == 5 || month == 7 || month == 8 || month == 10 || month ==12) {
    console.log("This month has 31 days.");
}
else if (month == 4 || month == 6 || month == 9 || month == 11) {
    console.log("This month has 30 days.");
}
else {
    console.log("This month has 28 days.");
}


// Switch

// 8. Use a switch to display a different greeting message depending on the language.

let language = "es";

switch (language) {
    case "es":
        console.log("Hola");
        break
    case "en":
        console.log("Hello");
        break
    case "de":
        console.log("Hallo");
        break
    case "it":
        console.log("Ciao");
        break
    default:
        console.log("Language not registered.");
}

// 9. Use a switch to do exercise 6 again.

// This exercise was walready done.

// 10. Use a switch to do exercise 7 again.

switch (month) {
    case 12:
    case 1:
    case 2:
        console.log("This month has 31 days.");
        break
        break
    case 3:
    case 4:
    case 5:
        console.log("This month has 31 days.");
        break
    case 6:
    case 7:
    case 8:
        console.log("This month has 31 days.");
        break
    case 9:
    case 10:
    case 11:
        console.log("This month has 30 days.");
        break
    default:
        console.log("Invalid month.");
}