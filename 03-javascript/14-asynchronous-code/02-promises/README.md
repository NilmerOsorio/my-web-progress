# 📚 JavaScript Promises

## 🎯 What I Learned

In this lab, I practised using **Promises in JavaScript** to handle asynchronous operations and execute tasks in a specific order.

### 🧠 Key Concepts

- **Promises:** Objects that represent the eventual completion or failure of an asynchronous operation.
- **Promise states:** `pending`, `fulfilled`, and `rejected`.
- **`resolve()`:** Marks a Promise as successfully completed.
- **`reject()`:** Marks a Promise as failed.
- **`.then()`:** Handles successful results and chains asynchronous operations.
- **`.catch()`:** Handles errors and stops the success chain when a Promise is rejected.
- **`setTimeout()`:** Simulates operations that take time to complete.

### 🧹 Practical Exercise

I simulated completing three chores in the following order:

1. 🐕 Walk the dog.
2. 🧹 Clean the kitchen.
3. ♻️ Take out the rubbish.

Each function returns a Promise, and I used `.then()` to execute the next chore only after the previous one succeeded. If a Promise is rejected, `.catch()` handles the error.

### 💡 What I Practised

- Creating Promises with `new Promise()`.
- Using `resolve()` and `reject()` to determine their outcomes.
- Chaining Promises to control the execution order.
- Passing results between `.then()` callbacks.
- Handling rejected Promises with `.catch()`.
- Understanding how asynchronous operations can be organised without blocking the main thread.

### 🚀 Key Takeaway

Promises help organise asynchronous JavaScript code, making it easier to manage operations that depend on one another and handle errors.

This lab helped me understand how Promise chaining works through a practical example rather than simply memorising the syntax.
