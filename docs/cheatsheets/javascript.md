# JavaScript Cheat Sheet

Quick reference for JavaScript essentials.

---

## Variables

```javascript
// const (cannot reassign)
const name = "John";

// let (can reassign)
let age = 25;
age = 26;

// var (legacy, avoid)
var old = "Don't use";
```

---

## Data Types

```javascript
// Primitive types
const string = "text";
const number = 42;
const boolean = true;
const nullValue = null;
const undefinedValue = undefined;

// Reference types
const array = [1, 2, 3];
const object = { key: "value" };
const function = () => {};
```

---

## Functions

```javascript
// Function declaration
function greet(name) {
  return `Hello, ${name}`;
}

// Arrow function
const greet = (name) => `Hello, ${name}`;

// Default parameters
const greet = (name = "World") => `Hello, ${name}`;
```

---

## Arrays

```javascript
// Create
const arr = [1, 2, 3];

// Add
arr.push(4);        // End
arr.unshift(0);     // Beginning

// Remove
arr.pop();          // End
arr.shift();        // Beginning

// Iterate
arr.forEach(item => console.log(item));
arr.map(item => item * 2);
arr.filter(item => item > 1);
arr.reduce((acc, item) => acc + item, 0);
```

---

## Objects

```javascript
// Create
const obj = { name: "John", age: 25 };

// Access
obj.name;           // Dot notation
obj["name"];        // Bracket notation

// Add/modify
obj.email = "john@example.com";

// Destructuring
const { name, age } = obj;

// Spread
const newObj = { ...obj, city: "NYC" };
```

---

## Conditionals

```javascript
// if/else
if (condition) {
  // code
} else if (otherCondition) {
  // code
} else {
  // code
}

// Ternary
const result = condition ? "yes" : "no";

// Logical OR (default value)
const value = input || "default";

// Logical AND (short-circuit)
const value = condition && "value";
```

---

## Loops

```javascript
// for loop
for (let i = 0; i < 5; i++) {
  console.log(i);
}

// for...of (arrays)
for (const item of array) {
  console.log(item);
}

// for...in (objects)
for (const key in object) {
  console.log(key);
}

// while loop
while (condition) {
  // code
}
```

---

## DOM Manipulation

```javascript
// Select elements
const el = document.getElementById("id");
const els = document.querySelectorAll(".class");

// Create elements
const div = document.createElement("div");

// Modify
div.textContent = "Text";
div.innerHTML = "<span>HTML</span>";
div.classList.add("class");
div.classList.remove("class");
div.setAttribute("data-value", "123");

// Append
parent.appendChild(div);

// Remove
el.remove();
```

---

## Event Listeners

```javascript
// Add listener
button.addEventListener("click", (e) => {
  console.log("Clicked");
});

// Remove listener
button.removeEventListener("click", handler);

// Common events
click, keydown, keyup, submit, change, input, load, resize
```

---

## Async/Await

```javascript
// Promise
fetch("/api/data")
  .then(response => response.json())
  .then(data => console.log(data))
  .catch(error => console.error(error));

// Async/await
async function fetchData() {
  try {
    const response = await fetch("/api/data");
    const data = await response.json();
    console.log(data);
  } catch (error) {
    console.error(error);
  }
}
```

---

## ES Modules

```javascript
// Export
export const value = 123;
export function myFunction() {}
export default myClass;

// Import
import myClass from "./module.js";
import { value, myFunction } from "./module.js";
import * as module from "./module.js";
```

---

## Common Mistakes

- ❌ Using `var` instead of `let`/`const`
- ❌ Not handling async errors
- ❌ Forgetting `await` in async functions
- ❌ Using `==` instead of `===`
- ❌ Not null-checking before accessing properties
