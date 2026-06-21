// 5. Higher-Order Functions – 10 Practice Tasks

// Task 1: repeat(action, times)
const repeat = (action, times) => {
  for (let i = 0; i < times; i++) {
    action(i);
  }
};
repeat((i) => console.log(`Call ${i + 1}`), 3);

// Task 2: operate(arr, fn)
const operate = (arr, fn) => arr.map(fn);
console.log("Operate (double):", operate([1, 2, 3], n => n * 2));

// Task 3: filterBy(arr, conditionFn)
const filterBy = (arr, conditionFn) => arr.filter(conditionFn);
console.log("FilterBy (>5):", filterBy([3, 7, 2, 9, 1], n => n > 5));

// Task 4: logger(fn)
const logger = (fn) => (...args) => {
  console.log("Before:", ...args);
  const result = fn(...args);
  console.log("After:", result);
  return result;
};
const loggedAdd = logger((a, b) => a + b);
loggedAdd(3, 4);

// Task 5: createAdder(x)
const createAdder = (x) => (y) => x + y;
const add5 = createAdder(5);
console.log("Add 5 to 10:", add5(10));

// Task 6: sortBy(arr, key)
const sortBy = (arr, key) => [...arr].sort((a, b) => a[key] > b[key] ? 1 : -1);
const items = [{ name: "C", price: 30 }, { name: "A", price: 10 }, { name: "B", price: 20 }];
console.log("Sorted by price:", sortBy(items, "price"));

// Task 7: pipeline(...functions)
const pipeline = (...functions) => (initial) => 
  functions.reduce((acc, fn) => fn(acc), initial);
const add1 = x => x + 1;
const double = x => x * 2;
const minus3 = x => x - 3;
const process = pipeline(add1, double, minus3);
console.log("Pipeline result (start 5):", process(5)); // (5+1)*2-3 = 9

// Task 8: withTax(taxRate)
const withTax = (taxRate) => (price) => price * (1 + taxRate);
const addVat = withTax(0.2);
console.log("Price with 20% tax:", addVat(100));

// Task 9: debounce(fn, delay) - basic version
const debounce = (fn, delay) => {
  let timeoutId;
  return (...args) => {
    clearTimeout(timeoutId);
    timeoutId = setTimeout(() => fn(...args), delay);
  };
};
const debouncedLog = debounce((msg) => console.log("Debounced:", msg), 1000);
debouncedLog("test");

// Task 10: memoize(fn)
const memoize = (fn) => {
  const cache = new Map();
  return (...args) => {
    const key = JSON.stringify(args);
    if (cache.has(key)) {
      console.log("Cached:");
      return cache.get(key);
    }
    const result = fn(...args);
    cache.set(key, result);
    return result;
  };
};
const expensiveSquare = memoize((n) => n * n);
console.log("Memoize 5:", expensiveSquare(5));
console.log("Memoize 5 (cached):", expensiveSquare(5));