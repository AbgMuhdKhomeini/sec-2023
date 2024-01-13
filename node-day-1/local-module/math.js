function add(a, b) {
  return a + b;
}

function subtract(a, b) {
  return a - b;
}

const math = { add: add, subtract: subtract };

console.log("math.js is loaded");

// module.exports = add;

// module.exports = [1, 2, 3, 4];
// module.exports = { person: "Khomeini", age: 34 };

module.exports = math;
