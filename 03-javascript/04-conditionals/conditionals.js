// if, else if, else

// if

let age = 37;

if (age == 37) {
    console.log(`The age is ${age}.`);
}

// else

if (age == 37) {
    console.log("The age is 37.");
}
else {
    console.log("The age isn't 37.");
}

// else if

if (age == 37) {
    console.log("The age is 37.");
}
else if (age < 18) {
    console.log("You're under-age.");
}
else {
    console.log("The age neither is 37 nor is under-age.");
}

// Ternary operators

const message = age == 37 ? "The age is 37." : "The age isn't 37.";
console.log(message);

// Switch

let day = 7;
let dayName;

switch (day) {
    case 0:
        dayName = "Monday.";
        break
    case 1:
        dayName = "Tuesday.";
        break
    case 2:
        dayName = "Wednesday.";
        break
    case 3:
        dayName = "Thursday.";
        break
    case 4:
        dayName = "Friday.";
        break
    case 5:
        dayName = "Saturday.";
        break
    case 6:
        dayName = "Sunday.";
        break
    default:
        dayName = "Incorrect day number.f";
}

console.log(dayName);


