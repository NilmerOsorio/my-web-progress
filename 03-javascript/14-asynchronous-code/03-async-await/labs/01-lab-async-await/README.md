# 🚀 JavaScript Async Basics

## 📌 Overview
Practiced creating an `async` function and retrieving its returned value using `.then()`.

## 🎯 What I Learned
- Declaring asynchronous functions with `async`.
- Understanding that an `async` function always returns a **Promise**.
- Using `.then()` to access the resolved value.
- Returning a string from an asynchronous function.

## 💻 Example
```javascript
async function startAnimeHub() {
    return "AnimeHub is starting!";
}

startAnimeHub().then((message) => {
    console.log(message);
});
```

## ✅ Output
```text
AnimeHub is starting!
```

## 💡 Key Takeaway
Even when an `async` function returns a regular string, JavaScript wraps that value in a **Promise**. The `.then()` method lets us access the resolved message.

