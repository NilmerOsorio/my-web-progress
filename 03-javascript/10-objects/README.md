## 🧠 What I Learned

Through this code exploration, I gained a thorough understanding of JavaScript objects, how they store and manage dynamic data, how to iterate over their properties, and how memory references affect object comparison.

### ⚙️ 1. Object Fundamentals & Property Manipulation
- **Object Literals:** Learned how to create structured key-value pairs using the clean `{}` object literal syntax.
- **Property Access (Dot Notation):** Practiced reading specific properties directly from an object using dot notation (`user.name`).
- **Dynamic Property Addition:** Learned that objects are mutable in JavaScript, allowing new properties to be added at any time (`user.profileJob = "..."`).
- **Deleting Properties:** Practiced completely removing key-value pairs from an object using the `delete` operator.

### ✒️ 2. Object Methods & Property Iteration
- **Methods & `this` Keyword:** Learned how to bind functions to object properties and use the `this` keyword inside a method to dynamically access the object's own properties (`this.name`).
- **Looping with `for...in`:** Traversed through an object's keys using a `for...in` loop.
- **Bracket Notation (`object[key]`):** Practiced using bracket notation inside loops to dynamically evaluate variable property names when dot notation cannot be used.

### 🏢 3. Nested Data Structures
- **Complex Objects:** Modeled multi-layered data by embedding objects and functions inside other objects (`secondLanguage`).
- **Chained Access:** Learned to navigate through nested levels using chained dot notation (`user1.secondLanguage.name`) and calling nested methods (`user1.secondLanguage.talk()`).

### 🔍 4. Object Equality: Reference vs. Value
- **Reference Equality:** Discovered that comparing two distinct objects (`person1 === person2`) always returns `false`—even if they have identical properties—because JavaScript compares objects by their memory address (reference), not their contents.
- **Property Value Comparison:** Learned that extracting primitive property values (`person1.name === person2.name`) compares actual primitive values, which evaluates to `true`.