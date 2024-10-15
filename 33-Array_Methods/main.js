// ARRAY METHODS

// const fruits = ["banana", "apple", "orange", "kiwi", "mango"];
// console.log(fruits); // [ 'banana', 'apple', 'orange', 'kiwi', 'mango' ]

// // Adding elements into an array

// // PUSH addes elements from ending of the array
// fruits.push("grape");
// console.log(fruits); // [ 'banana', 'apple', 'orange', 'kiwi', 'mango', 'grape' ]
// Returns the length of array with added element

// // UNSHIFT addes elements from the beginning of the array

// fruits.unshift("lemon");
// console.log(fruits); // ['lemon','banana','apple','orange','kiwi','mango','grape']

// // Deleting elements from the array

// // Remove (pop) the last element:
// fruits.pop();
// console.log(fruits); // ["lemon", "banana", "apple", "orange", "kiwi", "mango"];
// // pop() returns the element it removed:
// let removedElementByPop = fruits.pop();
// console.log(fruits); // ["lemon", "banana", "apple", "orange", "kiwi"];
// console.log(removedElementByPop); // mango

// // SHIFT
// // Remove (shift) the first element:

// console.log(fruits); // ["lemon", "banana", "apple", "orange", "kiwi"];

// fruits.shift();
// console.log(fruits); // [ 'banana', 'apple', 'orange', 'kiwi' ]

// // shift() returns the element it removed:
// let shifted = fruits.shift(); // [ 'banana', 'apple', 'orange', 'kiwi' ]
// console.log(shifted); // banana
// console.log(fruits); //[ 'apple', 'orange', 'kiwi' ]

// // DELETE
// // Deletes an element by index given but the place of it remains
// delete fruits[0];
// console.log(fruits); //[ <1 empty item>, 'orange', 'kiwi' ]

// // SPLICE
// // Addes elements, removes element and each and every indexes of the array

// fruits.splice(0, 1, "lemon", "apple", "pineapple", "ganate", "pomegranate");
// // here 0 is starting index
// // and 1 is deleting one item which was <1 empty item>
// // "lemon", "apple", "pineapple", "ganate", "pomegranate"; are items which will be added

// console.log(fruits); // ['lemon','apple','pineapple','ganate','pomegranate','orange','kiwi']

// Another methods

// Don't change the original array but take the some parts

// // slice
// const carModels = ["BMW", "GM", "Toyota", "Ferrari", "GM"];
// console.log(carModels);

// let sliced = carModels.slice();
// console.log(sliced); // [ 'BMW', 'GM', 'Toyota', 'Ferrari', 'GM' ]
// console.log(carModels); // [ 'BMW', 'GM', 'Toyota', 'Ferrari', 'GM' ]

// let sliced2 = carModels.slice(2, 4);
// console.log(sliced2); // [ 'Toyota', 'Ferrari' ]

// // indexOf
// console.log(carModels.indexOf("GM")); // 1
// console.log(carModels.lastIndexOf("GM")); // 4

// console.log(carModels.indexOf("Mers")); // -1 => no = -1;

// // includes
// console.log(carModels.includes("BMW")); // true

// // join
// carModels.join(" * "); // Shows unchanged array
// console.log(carModels); // ["BMW", "GM", "Toyota", "Ferrari", "GM"];

// let joinedCars = carModels.join(" * ");
// console.log(joinedCars); // BMW * GM * Toyota * Ferrari * GM
// // join returns a STRING not an Array

// // Opposite is split
// let splitedCars = joinedCars.split(" * ");
// console.log(splitedCars); // [ 'BMW', 'GM', 'Toyota', 'Ferrari', 'GM' ]

// // join for ARRAYS and split for STRINGS

// // reverse

// console.log(carModels);
// console.log(carModels.reverse()); //[ 'GM', 'Ferrari', 'Toyota', 'GM', 'BMW' ]

// // Methods works with functions

// const numbers = [26, 83, 710, 56, -12, 455, 951];

// // sort()

// console.log(numbers.sort()); // [-12, 26, 455, 56,710, 83, 951] => sorted by abc

// console.log(
//   numbers.sort(function (a, b) {
//     return a - b;
//   })
// ); // [-12, 26, 56, 83, 455, 710, 951]; => sorted by order

// let sortedNumbers = numbers.sort(function (a, b) {
//   return a - b;
// });
// console.log(sortedNumbers); // [-12,26,56,83,455,710,951];

// // just opposite of it
// let revSortedNumbers = numbers.sort(function (a, b) {
//   return b - a;
// });
// console.log(revSortedNumbers); // [951, 710, 455, 83, 56,  26, -12];

// forEach
// const numbers2 = [5, 10, -5, 0, 124, 24];
// let sum = 0;
// numbers2.forEach(function (number, index) {
//   sum += number;
// });
// console.log(sum); // 158

// numbers2.forEach(function(number, index){
//     if(number === -5){
//       console.log(index);
//     }
// });

// map

// const numbers3 = [52, 100, -15, 0, 122, 25];

// let mapIndex = numbers3.map(function(number, index){
//     return index
// })
// console.log(mapIndex); //[ 0, 1, 2, 3, 4, 5 ]

// filter

// const numbers4 = [102, 119, -12, 50, 132, 255];

// let small100 = numbers4.filter(function (el) {
//   return el > 100
// });

// console.log(small100);// [ 102 119 132 255 ] returns whole array

// // find
// const numbers5 = [130, 209, -120, -50, 13, 205];

// let small200 = numbers5.find(function (el) {
//   return el > 200;
// });

// console.log(small200); // 209 returns only the first el

// // findIndex
// const numbers6 = [235, 29, -20, 70, 10, 304, 765];

// let small300 = numbers6.findIndex(function (el) {
//   return el > 300;
// });

// console.log(small300); // 5 returns only the first el's index

// // reduce
// const numbers7 = [23, 20, 44, 90, 454, 2, 76];

// let summary = numbers7.reduce(function (acc, cur) {
//   console.log("Accamulator :", acc);
//   console.log("Current :", cur);
//   return acc + cur;
// }, 0);
// console.log(summary); // 709

// reduceRight

// const numbers8 = [23, 20, 44, 90, 454, 2, 76];

// let summary2 = numbers8.reduceRight(function (acc, cur) {
//   console.log("Accamulator :", acc);
//   console.log("Current :", cur);

//   return acc + cur;
// }, 0);
// console.log(summary2); // 709

// Finding number can devidable to 5 till 100

//Step 1 creating an array which contains 100 numbers
// let numbersTo100 = [];

// for (let i = 1; i <= 100; i++) {
//     numbersTo100.push(i);    
// }
// console.log(numbersTo100);

// // Step 2 find 5s
// let filteredNumbers = numbersTo100.filter(function(el){
//     return el % 5 === 0;
// })
// console.log(filteredNumbers);

// // Step 3 result 
// let r = filteredNumbers.reduce(function(acc, cur){
//     return acc + cur
// },0)
// console.log(r);

