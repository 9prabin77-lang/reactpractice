// 2. Arrays & Objects – 10 Practice Tasks

// Task 1: Create colors array and log third element
const colors = ["red", "green", "blue", "yellow", "purple"];
console.log("Third color:", colors[2]);

// Task 2: Create book object
const book = { title: "JavaScript Guide", author: "Jane Doe", pages: 350, publishedYear: 2023 };
console.log("Book:", book);

// Task 3: Add isRead property immutably
const addIsRead = (bookObj) => ({ ...bookObj, isRead: true });
const bookWithRead = addIsRead(book);
console.log("Book with isRead:", bookWithRead);

// Task 4: Create array of 3 student objects
const students = [
  { name: "Alice", grade: 85 },
  { name: "Bob", grade: 92 },
  { name: "Charlie", grade: 78 }
];
console.log("Students:", students);

// Task 5: Create nested company object
const company = {
  name: "Tech Corp",
  location: "San Francisco",
  employees: ["John", "Jane", "Mike"]
};
console.log("Company:", company);

// Task 6: Increase each value by 5 immutably
const numbers = [10, 20, 30];
const increasedNumbers = numbers.map(n => n + 5);
console.log("Increased by 5:", increasedNumbers);

// Task 7: Add color property to car immutably
const car = { brand: "Toyota", model: "Camry" };
const carWithColor = { ...car, color: "blue" };
console.log("Car with color:", carWithColor);

// Task 8: Add item at beginning immutably
const shoppingList = ["apples", "bread", "milk"];
const updatedList = ["eggs", ...shoppingList];
console.log("Updated shopping list:", updatedList);

// Task 9: Create profile with nested address
const profile = {
  name: "Alice",
  address: { city: "New York", country: "USA" }
};
console.log("Profile:", profile);

// Task 10: Extract name and price from products array
const products = [
  { name: "Laptop", price: 999, category: "electronics" },
  { name: "Book", price: 29, category: "education" },
  { name: "Phone", price: 699, category: "electronics" }
];
const productNamesPrices = products.map(({ name, price }) => ({ name, price }));
console.log("Products (name & price only):", productNamesPrices);