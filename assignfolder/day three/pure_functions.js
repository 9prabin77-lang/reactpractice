// 1. Pure Functions – 10 Practice Tasks

// Task 1: multiply(a, b)
const multiply = (a, b) => a * b;
console.log("multiply(3, 4):", multiply(3, 4));

// Task 2: getFullName(firstName, lastName)
const getFullName = (firstName, lastName) => `${firstName} ${lastName}`;
console.log("getFullName('John', 'Doe'):", getFullName("John", "Doe"));

// Task 3: isEven(num)
const isEven = (num) => num % 2 === 0;
console.log("isEven(4):", isEven(4));
console.log("isEven(7):", isEven(7));

// Task 4: capitalize(str)
const capitalize = (str) => str.charAt(0).toUpperCase() + str.slice(1);
console.log("capitalize('hello'):", capitalize("hello"));

// Task 5: calculateArea(radius)
const calculateArea = (radius) => 3.14 * radius * radius;
console.log("calculateArea(5):", calculateArea(5));

// Task 6: getInitials(firstName, lastName)
const getInitials = (firstName, lastName) => 
  `${firstName.charAt(0).toUpperCase()}.${lastName.charAt(0).toUpperCase()}.`;
console.log("getInitials('Dipak', 'Shrestha'):", getInitials("Dipak", "Shrestha"));

// Task 7: fahrenheitToCelsius(f)
const fahrenheitToCelsius = (f) => (f - 32) * 5 / 9;
console.log("fahrenheitToCelsius(100):", fahrenheitToCelsius(100));

// Task 8: reverseString(str)
const reverseString = (str) => str.split('').reverse().join('');
console.log("reverseString('hello'):", reverseString("hello"));

// Task 9: findMax(arr)
const findMax = (arr) => Math.max(...arr);
console.log("findMax([3, 7, 2, 9]):", findMax([3, 7, 2, 9]));

// Task 10: formatDate(year, month, day)
const formatDate = (year, month, day) => `${day}/${month}/${year}`;
console.log("formatDate(2026, 6, 21):", formatDate(2026, 6, 21));