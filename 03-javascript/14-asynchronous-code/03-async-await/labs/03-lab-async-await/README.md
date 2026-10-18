# 🚀 AnimeHub – Async/Await Practice

## 📚 About This Lab
In this lab, I practiced using **`async` and `await` in JavaScript** to load three resources in a specific order: the anime catalogue, the user's profile, and the watchlist.

## 🎯 What I Practiced
- **Promises:** Creating functions that return Promises to simulate asynchronous operations.
- **`setTimeout()`:** Simulating loading delays for each resource.
- **`async` and `await`:** Ensuring each operation finishes before the next one begins.
- **Sequential execution:** Loading resources in the correct order instead of running them simultaneously.
- **Error handling:** Using `try...catch` to handle potential errors.
- **Console output:** Displaying a message when each resource finishes loading.

## ⚙️ How It Works
1. AnimeHub starts and displays a startup message.
2. The anime catalogue loads first.
3. The user's profile loads after the catalogue finishes.
4. The watchlist loads after the profile finishes.
5. Once everything is loaded, AnimeHub displays its final ready message.

## 💻 Expected Output

```text
Starting AnimeHub ...
Anime Catalogue loaded!
User profile loaded!
Watchlist loaded!
AnimeHub is ready!
```

## 💡 Key Takeaway
This lab helped me understand how **`async` and `await` make asynchronous JavaScript easier to read and manage**, especially when multiple operations must finish in a specific order.

These concepts are useful when building real applications, where different resources may need to load before the application is ready.

## 🛠️ Technologies
- JavaScript
- Promises
- `setTimeout()`
- `async` / `await`
- `try...catch`
