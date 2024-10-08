// console.log("Hello world!");

// Commenting in JS
// It is used double back slash to create it

//

// Variables = Container which contains the value
// var, let, const, and not mantioning the variable

// var laptop = "packard bell"
// let name = "Ali"
// const unchangableNumber = 1987;  // it is used to create unchangable numbers

// let = keyword creates variable,
// name = Indentifier (variable name), if the name consists more than two letters using the camelCase is considered the best practise
// "Ali" = value,
// = is operator,

// let age = 37;
// let AGE = 38;
// let Age = 40;

// All 3 above are different variables

// Data types
// There are 2 group of Data types: Primitive and Object

// There are 8 data types in JS

// 01 Number

// let age = 25;
// let price = 19.99;

// 02 String
// It is written in quotes like " ", '', ``

// let firstName = "Alibek";
// let lastName = 'Nematov';
// let middleName = `Xayitniyazovich`;

// 03 Boolean ==> logical type
// It has only 2 types: true and false

// let isMarried = true;
// let isProgrammer = false;

// 04 Undefined

// let notGiven;

// console.log(notGiven); // undefined

//05 Null
// When there is no value of Object, it returns NULL

// let noValueObject = null;

// 06 Bigint
// Big numbers are coded in BigInt type and at the end of the number

// let bigNumber = 53265n;

// 07 Symbol
// let symbol = Symbol();

// 08 Object
// Object includes objects, arrays, dates, maps, sets, intarrays, floatarrays, promises, and more.

// typeof
// For indentifying type of the Data we use "typeof" or typeof(variable) command

// console.log(typeof middleName);
// console.log(
//   typeof firstName,
//   typeof age,
//   typeof isMarried,
//   typeof notGiven,
//   typeof noValueObject,
//   "= null",
//   typeof bigNumber,
//   typeof symbol
// );

// Operators

// Arithmetic Operators

let number1 = 5;
    number2 = 12;
    number3 = 24;

// console.log(number1 + number2); // 17
// console.log(number3 - number2); // 12
// console.log(number3 / number2); // 2
// console.log(number3 % number1); // 4 24/5=4.4==> 4 after .
// console.log(number1 * number2); // 60
// console.log(number1 ** number2); // 244140625 

// console.log(number1++) // 5 postincrement (increased but not printed)
// console.log(number1) // 6  (here printed)

// console.log(++number2) // 13 preincrement  (increased and printed )

// console.log(number3--) // 24 postdecrement 
// console.log(number3--) // 23 

// console.log(--number3) // 23 predecrement (decreased and printed)

// Comparison operators
    number4 = "5";

console.log(number1 > number2) // false
console.log(number1 < number2) // true
console.log(number3 >= number2) // true
console.log(number2 >= number3) // false
console.log(number1 == number1) // true
console.log(number1 != number1) // false
console.log(number1 === number1) // true (both type and value are checked )
console.log(number1 === number4) // false (both type and value are checked  )
