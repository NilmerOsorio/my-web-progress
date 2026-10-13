// Asynchronous code allows certain operations to run without blocking
// the execution of the rest of the program.
// This allows JavaScript to continue executing other instructions
// while waiting for an operation to complete.

// Synchronous execution: these statements run one after another.
console.log(1);
console.log(2);

// setTimeout() schedules a callback function to execute after a delay
// of 4 seconds. It does not pause the execution of the program.
setTimeout(() => {
    console.log("Callback function hired");
}, 4000);

// These statements execute before the callback function above.
console.log(4);
console.log(5);


// Callbacks can also be passed as arguments to other functions.
// This allows us to control what happens after a particular task finishes.

function func1(callback) {
    // Schedule the execution of this callback after 3 seconds.
    setTimeout(() => {
        console.log("Task 1");

        // Execute the callback function after Task 1 is logged.
        callback();
    }, 3000);
}

function func2() {
    // These statements execute sequentially when func2() is called.
    console.log("Task 2");
    console.log("Task 3");
    console.log("Task 4");
}

// Pass func2 as a callback to func1.
// Task 1 executes after 3 seconds, followed by Tasks 2, 3, and 4.
func1(func2);
