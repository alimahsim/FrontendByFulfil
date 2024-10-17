// Primitive data types

let firstName = "John";
let firstNameCopy = firstName;
console.log(firstName, firstNameCopy); // John John

firstNameCopy = "Martin";
console.log(firstName, firstNameCopy); //John Martin

firstName = "Doland";
console.log(firstName, firstNameCopy); // Doland Martin

// There's not any connection to each other

// Reference data types

let user = {
  name: "John",
  surname: "Doe",
  age: 37,
};
let user2 = user;
console.log(user, user2); //{ name: 'John', surname: 'Doe', age: 37 } { name: 'John', surname: 'Doe', age: 37 }

user2.surname = "Smith";
console.log(user, user2); //{ name: 'John', surname: 'Smith', age: 37 } { name: 'John', surname: 'Smith', age: 37 }

// There's a connection each others

let user3 = {
  name: "John",
  surname: "Doe",
  age: 37,
};
console.log(user === user2); // true because they are connected each other
console.log(user === user3); // false because they are not connected each other by = ;

// FUNCTIONS

// 1) Function Decloration = Regular function

function adder(a, b) {
  return a + b;
}

console.log(adder(5, 5)); // 10

// Given fixed value to a param

function adder(a, b = 10) {
  // b = 10 fixed value
  return a + b;
}

console.log(adder(5)); // Don't give the second value which is already exist (b=10) and result is 15

// 2) Function Expression = Anonymous function
const divider = function (a, b) {
  return a - b;
};
console.log(divider(15, 9)); // 6

// 3) Arrow function

// 1
const multiplier = (a, b) => {
  return a * b;
};

console.log(multiplier(5, 5)); //25

// 2
const multiplier2 = (a, b) => a * b;
console.log(multiplier2(4, 5)); //20

// Arrow function has not got the "arguments" key word
// For instance

function addMulArg() {
  let sum = 0;
  //   console.log(arguments); // [Arguments] { '0': 10, '1': 56, '2': 84, '3': 89, '4': 12, '5': 100 }
  for (let i = 0; i < arguments.length; i++) {
    sum += arguments[i];
  }
  return sum;
}
console.log(addMulArg(10, 56, 84, 89, 12, 100)); // 351

// Function Decloration also has an arguments key word
// This key word is also works with the FD and FE, but doesn't with AF(Arrow functions)

// 4) IIFE (Immediately invoked function expression)

(function logger() {
  // It must be opened with rounded brackets()
  console.log("This is the message of IIFE function "); //This is the message of IIFE function
})();
// () these rounded brackets are for calling the function

// Now with the arguments how it works

//   (function add(a, b) {
//     console.log(a + b);
//   })(5, 5); // 10

// Console.log doesn't run the codes of IIFE outside of it
// (function add(a, b) {
//   return a + b;
// })(); // 10

// console.log(add(4, 4)); // add is not defined
