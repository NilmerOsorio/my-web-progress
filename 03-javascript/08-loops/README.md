# 📚 JavaScript Loops

In this section, I learned about **Loops in JavaScript** and how they are used to repeat blocks of code efficiently. I practiced how to use different types of loops, iterate through various data structures (like Arrays, Sets, Maps, and Strings), prevent infinite execution traps, and control the flow of loops dynamically.

## Main Concepts

- **Automation:** Loops automate repetitive tasks, running a block of code multiple times until a specific condition is met.
- **Pre-Condition vs. Post-Condition:** Some loops check the condition *before* running the code block (`while`), while others check it *after* running it (`do...while`).
- **Iteration over Collections:** Modern loops allow direct access to elements inside iterable objects without managing index variables manually.
- **Infinite Loop Danger:** If a loop's stopping condition is never reached, it will run forever, which can freeze the browser or crash the application.
- **Flow Manipulation:** You can interrupt or skip cycles inside a loop prematurely using specialized control keywords.

## Common Loop Structures and Controls

- `for` loop: Ideal when you know exactly how many times you want the code to run. It groups initialization, condition, and increment all in one place.
- `while` loop: Executes its block as long as a specified condition evaluates to `true`.
- `do...while` loop: Guarantees that the code block will execute **at least once** before evaluating the condition for the first time.
- `for...of` loop: A clean, modern way to step through the values of iterable collections such as Arrays, Strings, Sets, and Maps.
- `break`: Completely stops the loop and exits it immediately, moving to the next lines of code outside the loop.
- `continue`: Skips the rest of the code in the current iteration and jumps straight to the next cycle of the loop.

## Key Takeaway

Loops are fundamental tools for handling dynamic data sizes and eliminating repetitive code. Choosing the right loop depends on your scenario—use a standard `for` loop or `for...of` when working with known lengths or collections, a `while` loop when waiting for a specific state change, and control statements like `break` and `continue` to keep your logic efficient.