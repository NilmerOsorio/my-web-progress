# 🚀 AnimeHub — Async/Await Practice

## 📌 Overview
In this lab, I practiced using **Promises, `setTimeout()`, `async`, and `await`** to simulate loading an anime catalogue before welcoming the user to AnimeHub.

## 🎯 What I Practiced
- **Promises:** Created a Promise to represent the asynchronous loading process.
- **`setTimeout()`:** Simulated a one-second delay to represent loading the anime catalogue.
- **`async` and `await`:** Made the `startAnimeHub()` function wait until the catalogue finished loading.
- **`try...catch`:** Practiced handling potential errors during the asynchronous operation.
- **Execution order:** Ensured the loading message appeared before the catalogue confirmation and the welcome message.

## ⚙️ How It Works
1. AnimeHub displays `"Loading AnimeHub..."`.
2. The application simulates loading the anime catalogue for one second.
3. The Promise resolves with `"Anime catalogue loaded!"`.
4. The application displays the catalogue confirmation.
5. After an additional 500 milliseconds, the welcome message appears.

## 💻 Expected Output

```text
Loading AnimeHub...
Anime catalogue loaded!
Welcome to AnimeHub!
```

## 🧠 Key Takeaway
I learned how to use `async` and `await` to control the order of asynchronous operations, making sure the application finishes loading the necessary data before continuing.

**Note:** In this exercise, `await` waits for the catalogue to load, while the second `setTimeout()` adds an extra delay before displaying the welcome message.

## 🛠️ Technologies
- JavaScript
- Promises
- `setTimeout()`
- `async` / `await`
- `try...catch`
