// PROMISES
// A Promise is a JavaScript object that represents the eventual
// completion or failure of an asynchronous operation.

// It allows you to handle the result of an operation that may take
// some time to finish without blocking the execution of other code.

// A Promise can be in one of three states:
// - Pending: The operation hasn't finished yet.
// - Fulfilled: The operation completed successfully (resolve).
// - Rejected: The operation failed (reject).

// You can use .then() to handle successful results and .catch()
// to handle errors. Promises can also be chained to execute
// asynchronous operations in a specific order.

// Do these chores in order:
// 1. Walk the dog.
// 2. Clean the kitchen.
// 3. Take out the rubbish.

function walkDog() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {

            const dogwalked = false;

            if (dogwalked) {
                resolve("You walked the dog 🐕");
            }
            else {
                reject("You DIDN'T walk the dog")
            }
        }, 1500);
    });
}

function cleanKitchen() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {

            const kitchenCleaned = true;

            if (kitchenCleaned) {
                resolve("You clean the kitchen 🧹");
            }
            else{
                resolve("You DIDN'T clean the kitchen");
            }
        }, 2500);
    });
}

function takeOutRubbish() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {

            rubbishTakenOut = false;

            if(rubbishTakenOut){
                 resolve("You take out the rubbish ♻️");
            }
            else{
                reject("You DIDN'T take out the rubbish");
            }
        }, 500);
    });
}

walkDog().then(value => { console.log(value); return cleanKitchen() })
    .then(value => { console.log(value); return takeOutRubbish() })
    .then(value => { console.log(value); console.log("You finished all the chores!")})
    .catch(error => console.error(error));
    