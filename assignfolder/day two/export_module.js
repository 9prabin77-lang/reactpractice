// Task: Export a variable
export const message = "Hello from config!";

// Task: Export a function
export function showMessage() {
  console.log(message);
}

// Task: Export multiple variables
export const API_URL = "https://api.example.com";
export const TIMEOUT = 5000;

// Task: Export class
export class User {
  constructor(name) {
    this.name = name;
  }
  greet() {
    return `Hi, I'm ${this.name}`;
  }
}

// Task: Export an object
export const config = {
  theme: "dark",
  language: "en"
};

// Task: Export default
export default function () {
  return "Default export function";
}