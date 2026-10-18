
/*
 * ASYNC/AWAIT
 *
 * async = Declares a function that always returns a Promise.
 * await = Pauses the execution of the surrounding async function
 *         until the Promise settles (fulfills or rejects).
 *
 * Benefits:
 * - Makes asynchronous code easier to read and maintain.
 * - Allows asynchronous operations to be written in a sequential style.
 * - Works with try/catch to handle errors from rejected Promises.
 *
 * Important:
 * - async functions return a Promise, even if you return a regular value.
 * - await doesn't block the main thread. It pauses the async function
 *   while other JavaScript tasks can continue running.
 * - await doesn't put everything after it into an event queue.
 *   Instead, the async function resumes when the awaited Promise settles.
 * - resolve() fulfills a Promise, while reject() rejects it.
 */

// Simulates walking the dog and returns a Promise.
// The Promise fulfills if the dog is walked and rejects otherwise.
function walkDog() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {

            const dogwalked = false;

            if (dogwalked) {
                resolve("You walked the dog 🐕");
            }
            else {
                reject("You DIDN'T walk the dog");
            }
        }, 1500);
    });
}

// Simulates cleaning the kitchen and returns a Promise.
// The result depends on whether the kitchen was cleaned successfully.
function cleanKitchen() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {

            const kitchenCleaned = true;

            if (kitchenCleaned) {
                resolve("You clean the kitchen 🧹");
            }
            else {
                reject("You DIDN'T clean the kitchen");
            }
        }, 2500);
    });
}

// Simulates taking out the rubbish and returns a Promise.
// The Promise fulfills if the rubbish is taken out and rejects otherwise.
function takeOutRubbish() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {

            const rubbishTakenOut = true;

            if (rubbishTakenOut) {
                resolve("You take out the rubbish ♻️");
            }
            else {
                reject("You DIDN'T take out the rubbish");
            }
        }, 500);
    });
}

// Runs the chores sequentially using async/await.
// Each chore starts after the previous one successfully completes.
// If any Promise rejects, execution jumps to the catch block.
async function doChores() {

    try {
        // Wait for the dog-walking Promise to fulfill, then log its result.
        const walkDogResult = await walkDog();
        console.log(walkDogResult);

        // This chore starts only after walkDog() succeeds.
        const cleanKitchenResult = await cleanKitchen();
        console.log(cleanKitchenResult);

        // This chore starts only after cleanKitchen() succeeds.
        const takeOutRubbishResult = await takeOutRubbish();
        console.log(takeOutRubbishResult);

        // Reached only if all three chores complete successfully.
        console.log("You finished all the chores!");

    } catch (error) {
        // Handles a rejection from any awaited Promise in the try block.
        console.error(error);
    }
}

// Calls the async function to start executing the chores.
doChores();
