// Task 1 - Variables and Template Literals
const firstName = "John";
const lastName = "Doe";
const greeting = `Hello, ${firstName} ${lastName}!`;
console.log(greeting);

// Task 2 - let and const Scope
{
  let letVar = "I'm inside a block";
  console.log("Inside block (let):", letVar);
}
// console.log(letVar); // ReferenceError: letVar is not defined

{
  const constVar = "I'm a const inside a block";
  console.log("Inside block (const):", constVar);
}
// console.log(constVar); // ReferenceError: constVar is not defined

// Task 3 - Arrow Function Simple
const greet = (name) => `Hello, ${name}!`;
console.log(greet("Alice"));

// Task 4 - Arrow Function with Multiple Parameters
const multiply = (a, b) => a * b;
console.log("5 * 6 =", multiply(5, 6));

// Task 5 - Object Destructuring
const person = { name: "Bob", age: 25, country: "USA" };
const { name, country } = person;
console.log("Name:", name);
console.log("Country:", country);

// Task 6 - Array Destructuring
const arr = [10, 20, 30, 40];
const [first, second] = arr;
console.log("First:", first);
console.log("Second:", second);

// Task 7 - Default Parameters
function sayHello(name = "Guest") {
  return `Hello, ${name}!`;
}
console.log(sayHello("User"));
console.log(sayHello());

// Task 8 - Rest Operator (Sum of Numbers)
function sumAll(...numbers) {
  return numbers.reduce((sum, num) => sum + num, 0);
}
console.log("Sum of 1, 2, 3, 4:", sumAll(1, 2, 3, 4));

// Task 9 - Spread Operator with Arrays
const arr1 = [1, 2, 3];
const arr2 = [4, 5];
const merged = [...arr1, ...arr2];
console.log("Merged array:", merged);

// Task 10 - Merge and Destructure Objects
const obj1 = { a: 1, b: 2 };
const obj2 = { c: 3, d: 4 };
const mergedObj = { ...obj1, ...obj2 };
const { a, d } = mergedObj;
console.log("a:", a);
console.log("d:", d);