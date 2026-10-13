// Scenario: You're developing a small application that displays notifications to a user.
// Requirements
// 1. Create a JavaScript file named async-lab-01.js.
// 2. Display [Application started] immediately.
// 3. Schedule a notification called [Loading user data...] after 2 seconds.
// 4. Schedule another notification called [User data loaded!] after 4 seconds.
// 5. Display [Application continues running...] immediately after scheduling both notifications.

// Constraints
// - Use console.log() and setTimeout().
// - Don't use callbacks as custom function parameters yet.
// - Don't use Promises or async/await.

console.log("Application started");

setTimeout(() => {
    console.log("Loading user data...");
}, 2000);

setTimeout(() => {
    console.log("User data loaded!");
}, 4000);

setTimeout(() => {
    console.log("Application continues running ...");
}, 7000);