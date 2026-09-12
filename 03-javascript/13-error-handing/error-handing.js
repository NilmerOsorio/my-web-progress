// Exception

// It makes an exception
// let myObject;
// console.log(myObject.email);

// Errors capture

// try-catch

try {
    console.log(myObject.email);
    console.log("It finishes the execution without errors.");
} catch {
    console.log("ERROR");
}

// Error capture

try {
    console.log(myObject.email);
    console.log("It finishes the execution without errors.");
} catch (error) {
    console.log("ERROR:", error.message);
}

// finally

try {
    console.log(myObject.email);
    console.log("It finish the execution without errors.");
} catch (error) {
    console.log("ERROR:", error.message);
} finally {
    console.log("The programm has finished.");
}

// It's not going to work

// try {
//    console.log(myObject.email);
//    console.log("It finish the execution without errors.");
//} finally {
//    console.log("The programm has finished.");
//}

// Error throwing

// throw

// throw new Error("There was an error.");

function sumIntegers(a, b) {
    if (typeof a !== "number" || typeof b !== "number") {
        throw new TypeError("It only sums numbers.");
    }
    if (!Number.isInteger(a) || !Number.isInteger) {
        throw new Error("It only sums integers.");
    }
    return a + b;
}

try {
    console.log(sumIntegers(5, 10));
    // console.log(sumIntegers(5.5, 10));
    console.log(sumIntegers("5", 10));
    // console.log(sumIntegers(5, "10"));
    // console.log(sumIntegers("5", "10"));
} catch (error) {
    console.log("ERROR:", error.message);
}

// Catch various types of errors

try {
    // console.log(sumIntegers(5.5, 10));
    console.log(sumIntegers("5", 10));
} catch (error) {
    if (error instanceof TypeError){
        console.log("TYPE OF ERROR:", error.message);
    } else if (error instanceof Error) {
        console.log("ERROR:", error.message);
    }
}

// Create personalised exceptions

