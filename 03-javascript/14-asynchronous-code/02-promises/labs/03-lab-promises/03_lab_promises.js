// Scenario: AnimeHub needs to validate a username before creating a profile.
// Requirements:
// - Create a function called validateUsername(username).
// - Return a new Promise.
// - Resolve with "Username accepted!" if the username contains at least four characters.
// - Reject with an Error if it contains fewer than four characters.
// - Test the function with both "Giov" and "Jay".
// - Handle errors using .catch().
// Expected behaviour:
// Username accepted!
// Error: Username must contain at least 4 characters.
// Hint: Use username.length to check the number of characters.

function validateUsername(username) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (username.length >= 4) {
                resolve("Username accepted!");
            }
            else {
                reject(new Error("Username must contain at least 4 characters"));
            }
        }, 3000);
    });
}

validateUsername("Giov").then(value => { console.log(value) })
    .catch(error => console.error(error));

validateUsername("Jay").then(value => { console.log(value) })
    .catch(error => console.error(error));