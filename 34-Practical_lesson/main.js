// // Letter counter function

// function vowelCounter(w) {
//   let counter = 0;
//   for (i = 1; i <= w.length; i++) {
//     counter++;
//   }
//   console.log(counter);
// }
// vowelCounter("Counttyside"); // 11

// Creating a function that counts vowel letters
// 1 version

// let vowels = ["a", "A", "o", "O", "e", "E", "u", "U", "i", "I"];
// function vowelCounter(w) {
//   let counter = 0;
//   for (i = 0; i < w.length; i++) {
//     for (let j = 0; j < vowels.length; j++) {
//       if (w[i] === vowels[j]) counter++;
//     }
//   }
//   console.log(counter);
// }
// vowelCounter("Web developer"); // 5

// // 2nd solution
// function vowelCounter(w) {
//   let vowels = ["a", "A", "o", "O", "e", "E", "u", "U", "i", "I"];
//   let counter = 0;
//   for (let i = 0; i < w.length; i++) {
//     if (vowels.includes(w[i])) {
//       counter++;
//     }
//   }
//   console.log(counter);
// }
// vowelCounter("Web developer"); // 5

// To be continued ...
const numbers = 121255;

let r = numbers.toString().split("");
console.log(r);
console.log(typeof r); // object
console.log(typeof r[0]); // string

// By a function
let nums = 445;

function toArray(num) {
  let r = num.toString().split("").map(Number);
  return r;
}
console.log(toArray(nums)); // [4, 4, 5]

// Divides evenly

let dividesEvenly = (a, b) => (a % b === 0 ? true : false);
console.log(dividesEvenly(11, 7)); // false
console.log(dividesEvenly(12, 4)); // true

// Divides by Five

const divieFive = (a) => a % 5 === 0;
console.log(divieFive(20)); // true
console.log(divieFive(21)); // false

// String to number and calculater the value

const equation = function (n) {
  return eval(n);
};
console.log(equation("35 + 35")); // 70
console.log(equation("35 - 35")); // 0

console.log(eval("35/5")); // 7


console.log(isNaN("")); //false
console.log(true-'hello') // NaN
console.log(typeof(null + 40)) // number
let v = !!"0";
console.log(v); // true
console.log(1.15 + 2.30)  // 3.4499999999999997
console.log(22 - "1"); //21
console.log(typeof (function () {})()); //undefined 
console.log(Boolean("0") == Boolean(0)); //false
console.log(null == undefined); // true
console.log(Boolean('0')) // true
console.log(typeof function(){}) //function
console.log(typeof Infinity);//number
console.log((0 && "") || []); //[]
console.log(typeof (function () {})()); //undefined
// false values 
console.log(true+'hello') // truehello
console.log(typeof alert) //undefined
console.log(0 || (1 && 2) || 3); //2
console.log(2 + "2"); //22
console.log(typeof Symbol("JS")); //symbol
console.log('123' == 123);

console.log(0 && "" && []);
console.log("0")