# 🔐 AnimeHub — Promise Validation

## 📚 What I Practised

In this exercise, I practised using **JavaScript Promises to validate user input** before creating an AnimeHub profile.

### 🎯 Key Concepts
- **`new Promise()`:** Creating a Promise with `resolve` and `reject`.
- **Conditional statements:** Using `if/else` to validate a username.
- **`username.length`:** Checking the number of characters in a username.
- **`resolve()`:** Returning a successful result when the username contains at least four characters.
- **`reject()`:** Rejecting the Promise with an `Error` when the username is too short.
- **`.then()` and `.catch()`:** Handling successful results and errors.
- **`setTimeout()`:** Simulating a three-second asynchronous operation.

### 🧪 Test Cases

| Username | Expected result |
|---|---|
| `"Giov"` | ✅ Username accepted! |
| `"Jay"` | ❌ Username must contain at least 4 characters. |

### 🧠 Learning Goal

Understand how Promises can handle both successful and unsuccessful validation, using `resolve()` and `reject()` to represent different outcomes.

**💡 Practice approach:** I used AI to generate a practical coding exercise so I could write the solution myself, strengthen my understanding, and learn through hands-on practice rather than simply copying code.