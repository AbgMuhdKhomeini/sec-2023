// const text = "Hello world";
// const firstName = "Khomeini";
// const greeting = `${text} ${firstName}!`;

// loop hash
// for (line = "#"; line.length < 8; line += "#") console.log(line);

// fizzbuzz
// for (let i = 1; i <= 100; i++) {
//   let output = "";
//   if (i % 3 == 0) output += "Fizz";
//   if (i % 5 == 0) output += "Buzz";
//   console.log(output || i);
// }

// console.log(greeting);

// require math.js

const math = require("./math.js");

// require time.js

const time = require("./time.js");

console.log("index.js is loaded");

// console.log(math.add(2, 3));
// console.log(math.subtract(2, 10));

// console.log(tambah.person);

console.log(time.today);
console.log(time.month);
console.log(time.year);
console.log(time.time);
console.log(time.formatedTime);
