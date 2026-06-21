// 4. Immutability Principles – 10 Practice Tasks

// Task 1: Update object's age immutably
const person = { name: "Alice", age: 25 };
const updatedPerson = { ...person, age: 26 };
console.log("Updated person:", updatedPerson);

// Task 2: Add new hobby to hobbies array immutably
const hobbies = { name: "Bob", hobbies: ["reading", "gaming"] };
const personWithHobby = { ...hobbies, hobbies: [...hobbies.hobbies, "coding"] };
console.log("With new hobby:", personWithHobby);

// Task 3: Remove last element from array immutably
const arr1 = [1, 2, 3, 4, 5];
const arrWithoutLast = arr1.slice(0, -1);
console.log("Without last:", arrWithoutLast);

// Task 4: Replace second element in array immutably
const arr2 = ["a", "b", "c", "d"];
const replaced = [...arr2.slice(0, 1), "x", ...arr2.slice(2)];
console.log("Replaced second:", replaced);

// Task 5: Change nested property immutably
const personNested = { name: "John", address: { city: "New York", country: "USA" } };
const updatedNested = {
  ...personNested,
  address: { ...personNested.address, city: "Los Angeles" }
};
console.log("Updated city:", updatedNested);

// Task 6: Add new key-value pair immutably
const obj1 = { a: 1, b: 2 };
const objWithNewKey = { ...obj1, c: 3 };
console.log("With new key:", objWithNewKey);

// Task 7: Remove property immutably
const objWithDeleted = { a: 1, b: 2, deletedAt: null };
const { deletedAt, ...objWithoutDeleted } = objWithDeleted;
console.log("Without deletedAt:", objWithoutDeleted);

// Task 8: Merge two arrays immutably
const arrA = [1, 2, 3];
const arrB = [4, 5];
const mergedArrays = [...arrA, ...arrB];
console.log("Merged arrays:", mergedArrays);

// Task 9: Merge two objects immutably
const objA = { x: 10, y: 20 };
const objB = { z: 30 };
const mergedObjects = { ...objA, ...objB };
console.log("Merged objects:", mergedObjects);

// Task 10: Update specific object in array immutably
const todoList = [
  { id: 1, task: "Do homework", done: false },
  { id: 2, task: "Walk dog", done: false }
];
const updatedTodo = todoList.map(item => 
  item.id === 1 ? { ...item, done: true } : item
);
console.log("Updated todo:", updatedTodo);