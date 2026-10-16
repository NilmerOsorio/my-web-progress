# 🔗 AnimeHub — Promise Chaining

## 📚 What I Practised

In this exercise, I practised **Promise chaining** to control the order of operations during AnimeHub's startup sequence.

### 🎯 Key Concepts
- **Promise chaining:** Executing operations in a specific order.
- **`.then()`:** Handling resolved values and moving to the next step.
- **Returning a Promise:** Ensuring the next `.then()` waits for the previous operation.
- **Sequential execution:** Loading the anime catalogue before loading the user's profile.
- **`.catch()`:** Handling errors across the entire Promise chain.
- **Data flow:** Understanding how values travel between `.then()` callbacks.

### ⚙️ Startup Sequence

1. 📚 Load the anime catalogue.
2. ✅ Display `"Catalogue ready!"`.
3. 👤 Return the Promise from `loadUserProfile()`.
4. 🔄 Pass the profile Promise's resolved value to the next `.then()`.
5. ✅ Display `"Profile ready!"`.
6. 🚨 Handle potential errors using a single `.catch()`.

### 🧠 Learning Goal

Understand how returning a Promise inside .then() connects asynchronous operations, allowing the next step to wait for the previous one instead of executing both operations independently.
