console.log("Hello, World!");

// I VARIABLES

// 1. Let

let name = "Aly";
// let => keyword
// name => variable name = identifier
// = => assignment operator
// "Aly" => value

console.log(name);

// If your variable consists of multiple words, you can't leave space so use camelCase or snake_case:
let firstName = "Aly";
let first_name = "Aly";
// Both are valid, but camelCase is more common in JavaScript.

// In the following cases you can't use a variable name:

// 1. If it starts with a number
// let 1name = "Aly"; // Invalid

// 2. If it contains special characters (except for _ and $)
// let name@ = "Aly"; // Invalid

// 3. If it is a reserved keyword
// let let = "Aly"; // Invalid

// 4. If it is already defined in the same scope
// let name = "Aly"; // Invalid, already defined

// 5. If it is a global variable and you try to define it again in the same scope
// let name = "Aly"; // Invalid, already defined globally

// using quotes is not necessary for variable names, but it is necessary for string values.
let greeting = "Hello, World!";
let greeting2 = "Hello, World!";
let greeting3 = `Hello, World!`;
// All three are valid, but using double quotes is more common in JavaScript.

// 2. Var

// Var is an older way to declare variables, but it is still valid.
var age = 25;
console.log(age);

// Diffences between let and var:
// 1. Var is function-scoped, while let is block-scoped.
// 2. Var can be re-declared in the same scope, while let cannot.
// 3. Var is hoisted to the top of the function, while let is not hoisted.
// 4. Var can be used before it is declared, while let cannot.
// 5. Var is less strict than let, meaning it allows more flexibility in variable names and values.
// 6. Var is less common in modern JavaScript, while let is more common.
// 7. Var can be used in global scope, while let is not recommended in global scope.

// 3. Const

// Const is used to declare constants, which are variables that cannot be reassigned.
const pi = 3.14;
console.log(pi);
// Const is block-scoped, like let, but it cannot be reassigned.
// This means that once a constant is declared, its value cannot be changed.
// However, if the constant is an object or an array, its properties or elements can be changed.
// For example:
const person = {
  name: "Aly",
  age: 25,
};
console.log(person);
person.age = 26; // This is allowed, because we are changing a property of the object, not the object itself.
console.log(person); // { name: 'Aly', age: 26 }
// But you cannot reassign the entire object:
// person = { name: "John", age: 30 }; // This will throw an error, because we are trying to reassign a constant.
// Similarly, for arrays:
const numbers = [1, 2, 3];
console.log(numbers);
numbers.push(4); // This is allowed, because we are changing the array, not reassigning it.
console.log(numbers); // [1, 2, 3, 4]
// But you cannot reassign the entire array:
// numbers = [5, 6, 7]; // This will throw an error, because we are trying to reassign a constant.
// Differences between let and const:
// 1. Let can be reassigned, while const cannot.
// 2. Let is used for variables that can change, while const is used for variables that cannot change.
// 3. Let is block-scoped, while const is also block-scoped.
// 4. Let can be used in global scope, while const is not recommended in global scope.
// 5. Let is more common in modern JavaScript, while const is also common.
// 6. Let can be used for variables that are not constants, while const is used for constants.
// 7. Let can be used for variables that are not objects or arrays, while const can be used for objects and arrays.
// 8. Let can be used for variables that are not numbers, while const can be used for numbers.
// 9. Let can be used for variables that are not strings, while const can be used for strings.
// 10. Let can be used for variables that are not booleans, while const can be used for booleans.
// 11. Let can be used for variables that are not functions, while const can be used for functions.

// I DATA TYPES
// JavaScript has 7 data types:
// 1. Number
// let age = 25; // Number

// 2. String
// let name = "Aly"; // String

// 3. Boolean
// only two values: true or false

let isStudent = true; // Boolean
let isEmployed = false; // Boolean

// 4. Undefined
let address; // Undefined
// Undefined means that the variable has been declared but has not been assigned a value.
// It is different from null, which means that the variable has been explicitly assigned a value of null.

// 5. Null
let phoneNumber = null; // Null
// Null means that the variable has been explicitly assigned a value of null.
// It is different from undefined, which means that the variable has not been assigned a value.

// 6. Symbol
let uniqueId = Symbol("id"); // Symbol
// Symbol is a unique and immutable data type that can be used to create unique identifiers.
// It is often used to create private properties in objects.
// Symbols are not commonly used in everyday programming, but they can be useful in certain situations.

// 7. BigInt
let bigNumber = BigInt(123456789012345678901234567890); // BigInt
// BigInt is a data type that can represent integers with arbitrary precision.
// It is useful for working with large numbers that cannot be represented by the Number data type.
// BigInt is not commonly used in everyday programming, but it can be useful in certain situations.

// Differences between data types:
// 1. Number is used for numeric values, while String is used for text values.
// 2. Boolean is used for true/false values, while Undefined is used for variables that have not been assigned a value.
// 3. Null is used for variables that have been explicitly assigned a value of null, while Symbol is used for unique identifiers.
// 4. BigInt is used for large integers, while Number is used for smaller integers and floating-point numbers.
// 5. String can be concatenated with other strings, while Number cannot.
// 6. Symbol is unique and immutable, while other data types can be changed.
// 7. Undefined and Null are often used to indicate the absence of a value, while other data types represent actual values.

// III OPERATORS
// There are several types of operators in JavaScript:

// 1. Arithmetic Operators
// let a = 10;
//     b = 5;
//     c = 6;
// console.log(a+b); // addition
// console.log(a-b); // subtraction
// console.log(c*a); // multiplication
// console.log(a/b); // division
// console.log(a%5); // modulus (remainder of division)
// console.log(a%c); // modulus (remainder of division)
// console.log(a**b); // exponentiation (a raised to the power of b)
// console.log(a++); // increment (postfix)
// console.log(a); // 11
// console.log(++a); //12  increment (prefix)
// console.log(a--); // decrement (postfix)
// console.log(a); // 11
// console.log(--a); // 10 decrement (prefix)

// 2. Comparison Operators
let x = 10;
y = 5;
z = "10";
q = 10;

console.log(x > y); // greater than
console.log(x < y); // less than
console.log(x >= y); // greater than or equal to
console.log(x <= y); // less than or equal to
console.log(x == y); // loose equality (checks value only)
console.log(z == q); // strict equality (checks value and type)
console.log(z === q); // strict equality (checks value and type)
