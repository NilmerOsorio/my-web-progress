# 📦 JavaScript OOP & Classes

## 🧠 What I Learned

Through this code exploration, I gained a thorough understanding of Object-Oriented Programming (OOP) concepts in modern JavaScript (ES6+), including class syntax, encapsulation with private fields, controlled data access using getters and setters, class inheritance, and static utility methods.

### 🏗️ 1. Class Declaration & Instantiation
- **Blueprint & Constructor:** Learned that classes serve as object blueprints, and the `constructor()` method executes automatically upon instantiation using the `new` keyword.
- **Prototypal Nature:** Verified that checking `typeof` on an instance returns `"object"`.

### 🎯 2. Default Parameters & Property Access
- **Constructor Defaults:** Applied default fallback values directly in constructor parameters (`name = "Without name"`), preventing missing arguments from evaluating properties to `undefined`.
- **Property Manipulation:** Practiced reading properties via dot notation (`person.alias`) or bracket notation (`person["alias"]`), and mutating public values directly.

### ⚙️ 3. Instance Methods
- **Encapsulating Behavior:** Declared methods directly within the class body to represent actions the object can perform (e.g., `walk()`).
- **Instance Context:** Utilized the `this` keyword inside methods to access and manipulate internal instance properties.

### 🔒 4. Encapsulation & Private Fields (`#`)
- **Strict Private State:** Used the hash `#` prefix (e.g., `#bank`) to declare truly private fields that cannot be accessed or modified from outside the class body.
- **Data Protection:** Observed that trying to access or reassign `#bank` directly on an instance throws a `SyntaxError`, keeping sensitive data secure.

### 🎛️ 5. Getters & Setters
- **Controlled Read (`get`):** Implemented getter methods to expose safe, read-only access to private properties (`get name()`).
- **Controlled Write (`set`):** Used setter methods to update private variables using standard assignment syntax (`person.bank = "..."`), allowing room for validation logic.

### 🧬 6. Class Inheritance & Method Overriding
- **Subclassing (`extends`):** Created child classes (`Dog`, `Fish`) that inherit properties and behaviors from a base parent class (`Animal`).
- **Parent Constructor (`super`):** Called `super(name)` inside child constructors to initialize parent properties before setting child-specific fields (e.g., `this.size`).
- **Polymorphism & Overriding:** Redefined parent methods inside child classes (e.g., replacing generic `sound()` with `"Guau!"`) to customize behavior for specific subclasses.

### ⚡ 7. Static Utility Methods
- **Class-Level Execution:** Defined utility methods using the `static` keyword that attach directly to the class container rather than individual object instances.
- **Direct Invocation:** Called static methods directly on the class name (`MathOperations.sum(5, 10)`) without needing to instantiate an object using `new`.