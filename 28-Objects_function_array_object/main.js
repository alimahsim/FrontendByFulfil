// Funtion

// function sayHi() {
//   console.log("Hi everybody");
// }

// sayHi(); // This is calling the function. if you don't use the it function never works

// function = keyword
// sayHi = name of the function (any name you want which connected to function)
// () = parameters need to be written
// {} = function body where main code is written

// Argument to parameter

// function sayHi(name) {
//   console.log("Hi everybody " + name);
// }

// sayHi("Alibek");

// function sum(num1, num2) {
//   console.log(num1 + num2);
// }

// sum(5, 10); // 15
// sum(4545, 1500); // 6045

// function findPeremeter(width, height) {
//   console.log((width + height) * 2);
// }

// findPeremeter(5, 6); // (5+6)*2 = 11*2 = 22

// Object

// let developer = {
//   name: "Alibek",
//   age: 37,
//   isMarried: true,
// };

// Calling value of the Object

// Dot notation
// console.log(developer)
// console.log(developer.name) // By using the dot (.) after key

// Second for call the value
// console.log(developer["age"])

// Changing the value of the object

// developer.age = "38";

// console.log(developer.age) // string=38
// Even if Object is created by CONST, it can change

// Adding new key and value outside of Object

// developer.gender = "male";
// console.log(developer.gender)

// let developer = {
//   name: "Alibek",
//   age: 37,
//   isMarried: true,
//   address: {
//     country: "Uzbekistan",
//     city: "Karshi",
//   }
// };

// Calling nested objects
// console.log(developer.address.city)

// Object methods
// If we use functions in objects is a method

// let developer = {
//   name: "Alibek",
//   age: 37,
//   isMarried: true,
//   address: {
//     country: "Uzbekistan",
//     city: "Karshi",
//   },
//   sayHi: function(){
//     console.log("Hi everybody")
//   },
// };

// developer.sayHi()

// Array = massive = list
// Gathers several data types in it

// let fruits = ["apple", "nut", "melon", "watermelon"];
// console.log(typeof fruits)

// const fruits = new Array("apple", "nut", "melon", "watermelon")
// console.log(typeof fruits)

// let emptyArr = [];
// let stringArr = ["book", "pen", "pencil"];
// let numberArr = [5, 6, 10, -1, 4.5];
// let mixedArr = [[], "book", 10, -1, 4.5, {}, sayHi()];

// Picking the each and every value of Array
// Index is given each element in array and it starts from 0

// let stringArr = ["book", "pen", "pencil"];
// Indexes     [  0   ,   1  ,     2   ]

// console.log(stringArr[1]); // pen

// Adding element into Array
// We can add a new element by index

// stringArr[3] = "peanut";
// console.log(stringArr);

// Measering the Array

// console.log(stringArr.length) // 4
