// Scenario: AnimeHub needs a reusable function to simulate operations that take time.
// Part 1 — Set up your workspace
// 1. Open VS Code.
// 2. Open your existing programming practice folder or create a new folder.
// 3. Inside it, create a file named async-lab-02.js.
// 4. Open the integrated terminal in VS Code.
// 5. Make sure you can execute JavaScript files using Node.js by checking node --version in the terminal.

// Part 2 — Create the reusable function
// Perform these operations in order.
// Your task checklist
// [✓] 1. Create the function
// Declare a function named `performTask` that accepts two parameters: `taskName` and `callback`.
// [✓] 2. Display the starting message
// Inside the function, display a message that includes the task name, such as `Starting: Load anime data`.
// [✓] 3. Schedule the delay
// Use `setTimeout()` to schedule an operation after 2,000 milliseconds.
// [✓] 4. Display the completion message
// Inside the timeout callback, display a message that includes the task name, such as `Completed: Load anime data`.
// [✓] 5. Execute the received callback
// After displaying the completion message, invoke the `callback` parameter.
// [✓] 6. Create the first callback
// Declare a separate function named `showSuccessMessage` that displays `Anime data loaded successfully!`.
// [✓] 7. Test the reusable function
// Call `performTask`, pass `Load anime data` as the task name, and pass `showSuccessMessage` as the callback.

// Part 3 — Run and inspect the output
// 1. Save the file.
// 2. In your VS Code terminal, execute node async-lab-02.js.
// 3. Observe the messages in the terminal.
// 4. Check whether the success message appears immediately or after the two-second delay.
// 5. Check whether the completion message appears before the success message.
// Your expected sequence is:
// Starting: Load anime data
// (approximately 2 seconds later)
// Completed: Load anime data
// Anime data loaded successfully!

// The delay applies to the completion message and the callback, not the starting message.
// Part 4 — Test reusability
// Now extend your program.
// 1. Declare a second callback named showProfileMessage.
// 2. Make it display User profile loaded successfully!.
// 3. Call performTask() again with the task name Load user profile and your new callback.
// 4. Run the program again.
// 5. Observe what happens when you schedule both tasks.

function performTask(taskName, callback){

    console.log(`Starting: ${taskName}`);

    setTimeout(() => {
        console.log(`Completed: ${taskName}`);
        callback();
    }, 2000);
}

function showSuccessMessage(){
    console.log("Anime data loaded successfully!");
}

function showProfileMessage(){
    console.log("User profile loaded successfully!");
}

performTask("Load anime data", showSuccessMessage);
console.log();
performTask("Load user profile", showProfileMessage);