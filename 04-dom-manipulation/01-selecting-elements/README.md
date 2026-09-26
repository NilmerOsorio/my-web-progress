# 🧩 DOM Manipulation — Part 1: Interactive Lists & Routing

In this exercise, I transitioned from basic static DOM manipulation to building interactive, dynamic user interfaces using **Vanilla JavaScript**.

### 📚 What I Learned

**Foundational DOM Methods:**
* 🔎 Selecting elements with `getElementById()`, `getElementsByClassName()`, `getElementsByTagName()`, `querySelector()`, and `querySelectorAll()`.
* 🎨 Modifying element styles with `.style`.
* 🏗️ Creating and appending elements with `createElement()` and `append()`.
* ✏️ Changing content with `innerText` and managing classes with `classList`.
* 🗑️ Removing elements with `.remove()`.

**Interactive Logic & Event Handling (New):**
* 🔗 **HTML5 Custom Data Attributes:** Using `data-*` (like `data-url`) to store hidden routing information directly within HTML elements without breaking the UI design.
* 🔄 **Iterating over NodeLists:** Using `.forEach()` to efficiently traverse and manipulate multiple DOM elements fetched by `querySelectorAll()`.
* 🎧 **Event Listeners:** Attaching `addEventListener('click')` to trigger custom functions based on user interactions.
* 🚀 **Dynamic Navigation:** Accessing the `dataset` property and manipulating the `window.location.href` object to route users to separate HTML pages without relying on standard `<a>` tags.
* 🐛 **Debugging:** Troubleshooting local server 404 errors by diagnosing and fixing relative file path structures.

### 💡 Practice Project

I evolved a static list of my favourite animes into an interactive catalog interface. Rather than just creating or removing elements in the console, I implemented a Vanilla JavaScript routing system. By clicking on any anime in the list, the application reads the underlying custom data attribute and seamlessly redirects the user to a dedicated HTML detail page for that specific anime.