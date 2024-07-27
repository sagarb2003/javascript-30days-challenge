// Activity 1: Understanding Closures

//Task 1:
function outer() {
  let a = 10;
  function inner() {
    return a;
  }
  return inner();
}
console.log(outer());

//Task 2:

function fn() {
  let counter = 0;
  return {
    inc: () => {
      counter++;
    },
    getCounter: () => {
      return counter;
    },
  };
}
let counter1 = fn();
// console.log(counter1);
counter1.inc();
counter1.inc();
counter1.inc();
console.log(counter1.getCounter());

//Activity 2 : Practical Closures

//Task 3:

function generate() {
  let uniqueId = Math.floor(Math.random() * 10) + 1;
  return {
    prevId: () => {
      return uniqueId;
    },
    inc: () => {
      uniqueId++;
    },
  };
}

let id = generate();
// console.log(id.prevId())
id.inc();
// console.log(id.prevId())

//Task 4:

function greet(name) {
  return function () {
    return `Welcome ${name}`;
  };
}

// console.log(greet("sagar")());
let g = greet("sagar");
console.log(g());

//Activity 3: Closures in loop

//Task-5:
let arr = [];
for (let i = 0; i < 5; i++) {
  arr[i] = function () {
    console.log(i);
  };
}
// console.log(arr);
arr[1]();
arr[4]();

//Activity 4 : Module Pattern

//Task-6

function collOfItems() {
  let arr = [];
  return {
    addItems: function (itemName) {
      arr.push(itemName);
    },
    removeItem: function (itemName) {
      let ind = arr.indexOf(itemName);
      if (ind == -1) {
        console.log(`${itemName} not found`);
        return;
      }
      const removed = arr.splice(ind, 1);
      console.log(`${removed} Removed !!!`);
    },
    displayItems: function () {
      return arr.slice();
    },
  };
}
let item = collOfItems();
item.addItems("apple");
item.addItems("orange");
item.addItems("grapes");
console.log(item.displayItems());
item.removeItem("orange");
console.log(item.displayItems());

//Activity 5: Memoization

//Task-7

function squareMemoize(fn) {
  const cache = {};

  return function (x) {
    if (cache[x] !== undefined) {
      console.log("Returning from cache...");
      return cache[x];
    }
    console.log("Calculating result...");
    const res = fn(x);
    cache[x] = res;
    return res;
  };
}

function square(x) {
  return x * x;
}

const memoizedSquare = squareMemoize(square);

// console.log(memoizedSquare(5));
// console.log(memoizedSquare(5));
// console.log(memoizedSquare(10));
// console.log(memoizedSquare(10));

//Task-8

function factorialMemoize(fn) {
  const cache = {};

  return function (x) {
    if (cache[x] !== undefined) {
      console.log("Returning from cache...");
      console.log(cache);
      return cache[x];
    }
    console.log("Calculating result...");
    const res = fn(x);
    cache[x] = res;
    return res;
  };
}

function factorial(x) {
  if (x == 1 || x == 0) return 1;
  return x * factorial(x - 1);
}

const memoizedFactorial=factorialMemoize(factorial);
console.log(memoizedFactorial(5));
console.log(memoizedFactorial(5));
console.log(memoizedFactorial(6));
console.log(memoizedFactorial(6));
