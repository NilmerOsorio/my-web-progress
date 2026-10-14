# 🎌 AnimeHub – Asynchronous Loading with Callbacks

## 📚 What I Practiced

In this exercise, I practiced **asynchronous JavaScript** by simulating the startup process of AnimeHub, where the anime catalog must load before the user's profile.

### 🧠 Key Concepts

- ⏳ **`setTimeout()`** – Simulated asynchronous operations with different loading times.
- 🔗 **Callbacks** – Executed functions after specific operations finished.
- 📦 **Function composition** – Organized the startup process into small, reusable functions.
- 🔄 **Execution order** – Ensured the user profile loads only after the anime catalog finishes loading.
- 🏁 **Nested callbacks** – Chained asynchronous operations to control the application's startup sequence.

## ⚙️ How It Works

1. 🚀 Display a startup message.
2. 🎌 Simulate loading the anime catalog (3 seconds).
3. 👤 Load the user profile after the catalog finishes loading (2 seconds).
4. ✅ Display the final messages once both operations are complete.

## 💡 What I Learned

I learned how callbacks help control the execution order of asynchronous operations. Even though each loading process takes time, AnimeHub waits for the anime catalog to finish before starting to load the user profile.

I also practiced using **nested callbacks** to ensure the application displays its final messages only after all loading operations have completed.

## 🎯 Goal

Build a stronger understanding of asynchronous JavaScript and callback-based execution before moving on to **Promises and `async/await`**.
