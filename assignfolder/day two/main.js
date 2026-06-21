// Task: Import a function
import { showMessage, API_URL, config, User } from './export_module.js';

// Task: Import default
import defaultFunc from './export_module.js';

// Task: Rename module on import
import { message as msg } from './export_module.js';

// Task: Import everything using *
import * as allExports from './export_module.js';

// Task 3 — Module: Export a config
console.log("API_URL:", API_URL);

// Task 4 — Module: Utility functions
import * as utils from './utils_module.js';

// Test 1 - 4: Module Imports
console.log("Imported function:", showMessage);
console.log("Imported default:", defaultFunc());
console.log("Renamed import:", msg);
console.log("All exports:", allExports);
console.log("Config:", config);
console.log("Formatted currency:", utils.formatCurrency(1234.56));
console.log("Random ID:", utils.generateRandomId());
console.log("Today date:", utils.getTodayDate());

// Task: Create class Vehicle
class Vehicle {
  constructor(brand) {
    this.brand = brand;
  }
  
  // Task: Add method drive()
  drive() {
    return `${this.brand} is driving`;
  }
}

// Task: Extend class Bike
class Bike extends Vehicle {
  // Task: Override drive()
  drive() {
    return `${this.brand} bike is riding`;
  }
}

// Task: Create class Student
class Student {
  constructor(name, marks) {
    this.name = name;
    this.marks = marks;
  }
  
  getMarks() {
    return `${this.name} has marks: ${this.marks}`;
  }
}

// Task: Inherit class Programmer
class Programmer extends Student {
  constructor(name, marks, language) {
    super(name, marks);
    this.language = language;
  }
  
  // Task: Call parent method using super()
  getMarks() {
    return `${super.getMarks()} and codes in ${this.language}`;
  }
}

// Create multiple child classes
class Teacher extends Student {
  constructor(name, marks, subject) {
    super(name, marks);
    this.subject = subject;
  }
  
  getMarks() {
    return `${super.getMarks()} teaches ${this.subject}`;
  }
}

class Engineer extends Student {
  constructor(name, marks, field) {
    super(name, marks);
    this.field = field;
  }
}

// Test classes
const myBike = new Bike("Yamaha");
console.log(myBike.drive());

const student = new Student("John", 85);
console.log(student.getMarks());

const programmer = new Programmer("Alice", 90, "JavaScript");
console.log(programmer.getMarks());

const teacher = new Teacher("Bob", 95, "Math");
console.log(teacher.getMarks());

// Task: Create promise that resolves
const resolvePromise = new Promise((resolve) => {
  resolve("Promise resolved!");
});

// Task: Create promise that rejects
const rejectPromise = new Promise((_, reject) => {
  reject("Promise rejected!");
});

// Task: Use .then()
resolvePromise.then((msg) => console.log(msg));

// Task: Use .catch()
rejectPromise.catch((err) => console.log(err));

// Task: Convert to async/await
async function asyncResolve() {
  const result = await resolvePromise;
  console.log("Async await result:", result);
}
asyncResolve();

// Task: Wait 2 seconds using setTimeout promise
function waitTwoSeconds() {
  return new Promise((resolve) => {
    setTimeout(() => resolve("Waited 2 seconds"), 2000);
  });
}
waitTwoSeconds().then((msg) => console.log(msg));

// Task: Create function that returns promise
function fetchData() {
  return Promise.resolve({ data: "mock data" });
}

// Task: Chain promises
fetchData()
  .then((res) => {
    console.log("Chained:", res);
    return "next step";
  })
  .then((step) => console.log("After chain:", step));

// Task: Use await inside async function
async function getData() {
  const data = await fetchData();
  console.log("Await inside async:", data);
}
getData();

// Task: Use multiple awaits
async function getMultiple() {
  const a = await fetchData();
  const b = await waitTwoSeconds();
  console.log("Multiple awaits:", a, b);
}
getMultiple();

// Task: Try using undefined function
try {
  undefinedFunction();
} catch (err) {
  console.log("Caught undefined function error:", err.message);
}

// Task: Divide number by zero
try {
  const result = 10 / 0;
  console.log("Division result:", result);
} catch (err) {
  console.log("Division error:", err.message);
}

// Task: Throw error manually
function throwError() {
  throw new Error("Custom error message");
}

try {
  throwError();
} catch (err) {
  console.log("Manual throw caught:", err.message);
}

// Task: Create function with try/catch
async function safeAsync() {
  try {
    await rejectPromise;
  } catch (err) {
    console.log("Async try/catch:", err);
  }
}
safeAsync();

// Task: Multiple catch messages
function multiCatchDemo() {
  try {
    throw new TypeError("Type error");
  } catch (err) {
    if (err instanceof TypeError) {
      console.log("Caught TypeError:", err.message);
    } else {
      console.log("Other error:", err.message);
    }
  }
}
multiCatchDemo();

// Task: Use finally
try {
  console.log("Trying...");
} finally {
  console.log("Finally block executed");
}

// Task: Try JSON.parse with invalid JSON
try {
  JSON.parse("{invalid json}");
} catch (err) {
  // Task: Catch error and log name
  console.log("Error name:", err.name);
}

// Task: Use try/catch in async function
async function asyncErrorDemo() {
  try {
    await Promise.reject("Async error occurred");
  } catch (err) {
    console.log("Async function error:", err);
  }
}
asyncErrorDemo();

// Task 1 — "this" inside an object method
const user = {
  name: "John",
  login() {
    console.log("Login as:", this.name);
  }
};
user.login();

// Task 2 — "this" losing context
const button = {
  label: "Click me",
  click() {
    console.log("Button clicked:", this.label);
  }
};
const handleClick = button.click;
try {
  handleClick();
} catch (err) {
  console.log("Context lost error");
}

const boundClick = button.click.bind(button);
boundClick();

// Task 5 — Class representing a Product
class Product {
  constructor(name, price) {
    this.name = name;
    this.price = price;
  }
  
  getInfo() {
    return `${this.name}: $${this.price}`;
  }
}

const product = new Product("Laptop", 999);
console.log(product.getInfo());

// Task 6 — Inheritance example
class FoodProduct extends Product {
  constructor(name, price, expiryDate) {
    super(name, price);
    this.expiryDate = expiryDate;
  }
  
  getInfo() {
    return `${super.getInfo()}, expires: ${this.expiryDate}`;
  }
}

const food = new FoodProduct("Milk", 3.99, "2026-12-31");
console.log(food.getInfo());

// Task 7 — Promise for fetching settings
function fetchSettings() {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve({ theme: "light", language: "en" });
    }, 2000);
  });
}

fetchSettings().then((settings) => {
  console.log("Settings fetched:", settings);
});

// Task 8 — async/await fetching mock data
async function fetchUsers() {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(["Alice", "Bob", "Charlie"]);
    }, 1000);
  });
}

async function getUsers() {
  const users = await fetchUsers();
  console.log("Users:", users);
}
getUsers();

// Task 9 — try/catch handling API errors
async function fetchWithError() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      Math.random() > 0.5 ? resolve(["user1"]) : reject("Failed to fetch");
    }, 500);
  });
}

async function safeFetch() {
  try {
    const users = await fetchWithError();
    console.log("Users:", users);
  } catch (err) {
    console.log("Friendly error message:", err);
  }
}
safeFetch();

// Task 10 — Combine everything
class AppProduct extends Product {
  constructor(name, price, category) {
    super(name, price);
    this.category = category;
  }
}

async function runApp() {
  try {
    console.log("Config:", config);
    const mockProducts = [
      new AppProduct("Phone", 699, "electronics"),
      new AppProduct("Book", 19.99, "education")
    ];
    console.log("Products:", mockProducts.map(p => p.getInfo()));
  } catch (err) {
    console.log("App error:", err);
  }
}
runApp();