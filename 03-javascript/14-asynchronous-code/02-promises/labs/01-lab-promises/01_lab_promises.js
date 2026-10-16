// Scenario: You're building AnimeHub, and the application needs to check whether its server is available.
// Your tasks:
// - Create a function called checkServer().
// - Return a new Promise.
// - Resolve it with the message "Server is online!".
// - Use .then() to display the successful result.
// - Use .catch() to handle a possible error.
// Rules: Don't use async/await yet. Practise the Promise syntax directly.
// Concepts: new Promise(), resolve, .then(), .catch().

function checkServer(){
    return new Promise((resolve, reject) => {

        const serverOnline = false;

        if(serverOnline) {
            resolve("Server is online!");
        }
        else{
            reject(new Error("Server is not online"));
        }
    });
}

checkServer().then(value => console.log(value))
             .catch(error => console.error(error));
             