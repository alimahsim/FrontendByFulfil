// Primitive data types
let firsName = "Mike";
let newFirstName = firsName;
console.log(firsName); // Mike
console.log(newFirstName); // Mike

newFirstName = "Jone";
console.log(newFirstName); // Jone

// Reference type

let laptop = {
  brand: "Asus",
  ram: 16,
};

let newLaptop = laptop;

console.log(laptop); // { brand: 'Asus', ram: 16 }
console.log(newLaptop); // { brand: 'Asus', ram: 16 }

console.log(laptop === newLaptop); // true

let laptop2 = {
  brand: "Asus",
  ram: 16,
};

console.log(laptop === laptop2); // false

newLaptop.brand = "Lenovo";
console.log(newLaptop); // { brand: 'Lenovo', ram: 16 }

console.log(laptop); // { brand: 'Lenovo', ram: 16 }

// Functions
// 3 types
// 1. Function Declaration

function add(a, b) {
  return a + b;
}
console.log(add(2, 3)); // 5

// 2. Function Expression

const add2 = function (a, b) {
  return a + b;
};
console.log(add(2, 3)); // 5

// 3. Arrow function

// const add3 = (a, b) => {
//   return a + b;
// };

// console.log(add(2, 3)); // 5

// 3.2
const add3 = (a, b) => a + b;
console.log(add3(2, 3)); // 5

// 4. IIFE => Immediatly Invoked Function Expression

(function sayHi() {
  console.log("Called");
})(); // Called

(function add(a, b) {
  console.log(a + b);
})(2, 3); // 5

// arguments
function add() {
  console.log(arguments); // {
  //   '0': 5,
  //   '1': 166,
  //   '2': 523,
  //   '3': 651,
  //   '4': 452,
  //   '5': 62,
  //   '6': 54
  // }
  let sum = 0;
  for (let i = 0; i < arguments.length; i++) {
    sum += arguments[i];
  }
  return sum;
}
console.log(add(5, 166, 523, 651)); // 1345
console.log(add(5, 166, 523, 651, 452, 62, 54)); // 1913
// Only Arrow Function does not have "arguments" keyword

// Default value
const addArrow = (a = 5, b = 5) => a + b;
console.log(addArrow(10)); // 15
console.log(addArrow()); // 10
console.log(addArrow(10, 20)); //30
