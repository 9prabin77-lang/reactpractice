// 3. Array Methods (map, filter, reduce, find, forEach) – 10 Practice Tasks

// Task 1: Use map to double all numbers
const doubled = [1, 2, 3, 4, 5].map(n => n * 2);
console.log("Doubled:", doubled);

// Task 2: Use filter to get even numbers
const evens = [1, 2, 3, 4, 5, 6].filter(n => n % 2 === 0);
console.log("Even numbers:", evens);

// Task 3: Use reduce to calculate sum
const sum = [10, 20, 30, 40].reduce((acc, n) => acc + n, 0);
console.log("Sum:", sum);

// Task 4: Use find to get first object with age > 18
const users = [
  { name: "John", age: 17 },
  { name: "Jane", age: 20 },
  { name: "Mike", age: 16 }
];
const adult = users.find(user => user.age > 18);
console.log("First adult:", adult);

// Task 5: Use forEach to log each element with index
["apple", "banana", "orange"].forEach((fruit, index) => {
  console.log(`Index ${index}: ${fruit}`);
});

// Task 6: Use map to extract only names
const userNames = users.map(user => user.name);
console.log("User names:", userNames);

// Task 7: Use filter to get products with price < 100
const productsList = [
  { name: "Pen", price: 10 },
  { name: "Book", price: 50 },
  { name: "Laptop", price: 999 }
];
const cheapProducts = productsList.filter(p => p.price < 100);
console.log("Products under $100:", cheapProducts);

// Task 8: Use reduce to find maximum value
const max = [3, 7, 2, 9, 1].reduce((max, n) => n > max ? n : max, -Infinity);
console.log("Max value:", max);

// Task 9: Use map and filter to get adult names in uppercase
const adultsUpper = users
  .filter(user => user.age >= 18)
  .map(user => user.name.toUpperCase());
console.log("Adults (uppercase):", adultsUpper);

// Task 10: Use forEach to build HTML unordered list
const items = ["Item 1", "Item 2", "Item 3"];
let htmlList = "<ul>";
items.forEach(item => {
  htmlList += `<li>${item}</li>`;
});
htmlList += "</ul>";
console.log("HTML list:", htmlList);