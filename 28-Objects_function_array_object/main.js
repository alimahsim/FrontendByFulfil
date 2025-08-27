// FUNCTIONS

function greet() {
  console.log("Hello World!");
}

// function => keyword
// greet => function name
// () => parameters
// {} => function body

greet(); // calling the function

// Parametering

function greetToName(name) {
  console.log("Hello, " + name);
}
greetToName(); // Result = Hello undefined
// greetToName(Alibek); // Result  ReferenceError
greetToName("Alibek"); //  Giving argument

let name = "Jhon";
greetToName(name); // Result = Hello Jhon

function sum(num1, num2) {
  console.log(num1 + num2);
}
sum(20, 30); // Result = 50

function findPerimeter(width, height) {
  console.log((width + height) * 2);
}
findPerimeter(14, 9); // Result = 46

// OBJECTS

const coder = {
  name: "Alibek",
  age: 38,
  gender: "male",
  isMarried: true,
};
// const => keyword for declaring constants
// coder => constant name
// = => assignment operator
// { } => object literal
// name: "Alibek" => key-value pair

console.log(coder);

// Accessing object properties

// dot notation
console.log(coder.name); // Result = Alibek
console.log(coder.isMarried); // Result = true

// bracket notation
console.log(coder["age"]); // Result = 38

// Changing properties

coder.age = 25;
console.log(coder.age); // Result = 25

coder.name = "Mike";
console.log(coder.name); // Result = 'Mike'

console.log(coder); // Result = {name:'Mike', age:25, gender:'male', isMarried: true}

// Nested Object

const coder2 = {
  name: "Jhone",
  surname: "Doe",
  age: 22,
  address: {
    houseNumber: 25,
    streetName: "Blue Sky",
    city: "New York",
    country: "USA",
  },
};

console.log(coder2.address.city);
console.log(coder2["address"]["city"]);

const coder3 = {
  name: "Kemal",
  surname: "Beyhan",
  age: 45,
  address: {
    houseNumber: 100,
    streetName: "Kirmizi gul",
    city: "Istanbul",
    country: "Turkiye",
  },
  greeting: function () {
    console.log("Berhaba");
  },
};
coder3.greeting();

// ARRAYS

// 1
let fruits = ["apple", "cherry", "peanut"];

console.log(fruits);
console.log(typeof fruits);

// 2

let colors = new Array("red", "blue", "white");
console.log(colors);

let emptyArr = [];
let numArr = [1, 51, -5, 5.2];
let strArr = ["red", "apple", "shorts"];
let mixedArr = [
  true,
  25,
  "apple",
  16n,
  null,
  undefined,
  function () {},
  [],
  100,
];

console.log(mixedArr);

// Accessing array properties

// By index and it starts from 0

console.log(mixedArr[0]); // true
console.log(mixedArr[-1]); // undefined

// Changing properties

console.log(numArr); // Result = [ 1, 51, -5, 5.2 ]

numArr[0] = 1000;
console.log(numArr); // Result = [ 1000, 51, -5, 5.2 ]

numArr[4] = 555;
console.log(numArr); //[1000, 51, -5, 5.2, 555];

// Length of an array shows number of elements in it

console.log(numArr.length); // Reseult = 5
