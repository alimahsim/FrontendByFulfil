// ARRAY METHODS

const fruits = ["apple", "orange", "kiwi", "mango"];
console.log(fruits.length); // 4

//II Adding and removing elements methods

// Adding
// 1.Push
// Adds elements from bottom
fruits.push("cherry");
// console.log(fruits); // [ 'apple', 'orange', 'kiwi', 'mango', 'cherry' ]
// After adding returns the length of the array
// let pushedFriuts = fruits.push("cherry")
// console.log(pushedFriuts); // 5

// 2.Unshift
// Adds elements from top
fruits.unshift("banana");
// console.log(fruits); // [ 'banana', 'apple', 'orange', 'kiwi', 'mango', 'cherry' ]
// After adding returns the length of the array
// let unshiftedFruits = fruits.unshift("banana");
// console.log(unshiftedFruits); // 7

// 3. And by index
// But it replaces the element
fruits[0] = "peach";
console.log(fruits); // [ 'peach', 'apple', 'orange', 'kiwi', 'mango', 'cherry' ]
// here instead of "banana" we have "beach"

// Removing elements

// Shift
// removes the element from the top

fruits.shift();
console.log(fruits); // [ 'apple', 'orange', 'kiwi', 'mango', 'cherry' ]

// and returns that element
// let shiftedFruits =  fruits.shift();
// console.log(shiftedFruits);  // peach

// pop
// removes elements from the bottom
fruits.pop();
console.log(fruits); // [ 'apple', 'orange', 'kiwi', 'mango' ]
// and returns that element
// let poppedEl = fruits.pop();
// console.log(poppedEl); // mango

// Delete
delete fruits[0];
console.log(fruits); // [ <1 empty item>, 'orange', 'kiwi', 'mango' ]

// Method can both adding and removing
// Splice

// fruits.splice(1 = staring=index; 2 = deleting count; 3 = name of element that should be added)

fruits.splice(0, 1, "grape", "nut");
console.log(fruits); // [ 'grape', 'nut', 'orange', 'kiwi', 'mango' ]
// 1. started from index = [0]; 2. deleted => <1 empty item>; 3. added "grape", "nut"

//II Other Simpler Methods
// Slice
const vegetables = ["carrot", "potato", "tomato", "cucumber"];
vegetables.slice(2, 4);
console.log(vegetables); //[ 'carrot', 'potato', 'tomato', 'cucumber' ]
let slicedVeg = vegetables.slice(2, 4);
console.log(slicedVeg); // [ 'tomato', 'cucumber' ]
console.log(vegetables); // [ 'carrot', 'potato', 'tomato', 'cucumber' ]
// No infulence for original array

// indexOf
// console.log(vegetables.indexOf("cucumber")); // 3
// console.log(vegetables.indexOf("peanut")); // -1

// lastIndexOf
const vegetables2 = ["carrot", "potato", "tomato", "cucumber", "tomato"];
// console.log(vegetables.lastIndexOf("tomato")); //4
// console.log(vegetables.lastIndexOf("onion")); //-1

//Includes

// console.log(vegetables2.includes("carrot")); // true
// console.log(vegetables2.includes("garlic")); // false
// returns a boolean value

// Join
// Turns an array into string
// console.log(vegetables2.join(" ")); //carrot potato tomato cucumber tomato
// console.log(vegetables2); // [ 'carrot', 'potato', 'tomato', 'cucumber', 'tomato' ]
let joinedVeg = vegetables2.join(",");
// console.log(joinedVeg); //carrot,potato,tomato,cucumber,tomato
let joinedVeg2 = vegetables2.join("*");
// console.log(joinedVeg2); //carrot*potato*tomato*cucumber*tomato
let joinedVeg3 = vegetables2.join("");
// console.log(joinedVeg3); //carrotpotatotomatocucumbertomato
let joinedVeg4 = vegetables2.join();
// console.log(joinedVeg4); //carrot,potato,tomato,cucumber,tomato // default = ,
let joinedVeg5 = vegetables2.join("+");
// console.log(joinedVeg5); //carrot+potato+tomato+cucumber+tomato // any sign can be added

// And opposite is "split"
const veg = "carrot";
console.log(veg);
let splitedVeg = veg.split();
console.log(splitedVeg); // [ 'carrot' ]
let splitedVeg2 = veg.split("");
console.log(splitedVeg2); // [ 'c', 'a', 'r', 'r', 'o', 't' ]
let splitedVeg3 = veg.split(" ");
console.log(splitedVeg3); // [ 'carrot' ]
let splitedVeg4 = veg.split(" + ");
console.log(splitedVeg4); // [ 'carrot' ]

const veg2 = "carrot is very useful for health";
console.log(veg2); // carrot is very useful for health

let splVeg = veg2.split();
console.log(splVeg); // ["carrot is very useful for health"];

let splVeg2 = veg2.split("");
console.log(splVeg2); // [
//   'c', 'a', 'r', 'r', 'o', 't',
//   ' ', 'i', 's', ' ', 'v', 'e',
//   'r', 'y', ' ', 'u', 's', 'e',
//   'f', 'u', 'l', ' ', 'f', 'o',
//   'r', ' ', 'h', 'e', 'a', 'l',
//   't', 'h'
// ]
let splVeg3 = veg2.split(" ");
console.log(splVeg3); // [ 'carrot', 'is', 'very', 'useful', 'for', 'health' ]

// Reverse
// const vegetables2 = ["carrot", "potato", "tomato", "cucumber", "tomato"];
let reversedVeg = vegetables2.reverse();
console.log(reversedVeg); // [ 'tomato', 'cucumber', 'tomato', 'potato', 'carrot' ]

//III Methods works with functions

// Sort
const vegetables3 = [
  "carrot",
  "potato",
  "tomato",
  "cucumber",
  "tomato",
  "garlic",
];
console.log(vegetables3.sort()); //[ 'carrot', 'cucumber', 'garlic', 'potato', 'tomato', 'tomato' ]
let sortedVeg = vegetables3.sort();
// console.log(sortedVeg); // [ 'carrot', 'cucumber', 'garlic', 'potato', 'tomato', 'tomato' ]

const nums = [53, 785, 561, -12, 0, 1554];
// console.log(nums.sort()); // [ -12, 0, 1554, 53, 561, 785 ] // a little bit incorrect

// so

let sortedNums = nums.sort(function (a, b) {
  return a - b;
});
// console.log(sortedNums); //[ -12, 0, 53, 561, 785, 1554 ]
// Now it is correct

// And reversing it
let sortedNums2 = nums.sort(function (a, b) {
  return b - a;
});
// console.log(sortedNums2); //[ 1554, 785, 561, 53, 0, -12 ]

//1. forEach
// Before it
const nums2 = [12, 0, 53, 561, 785, 1554];
let sum = 0;
for (let i = 0; i < nums2.length; i++) {
  sum += nums2[i];
}
console.log(sum); // 2965

// By forEach
let sum2 = 0;
nums2.forEach(function (num, index) {
  sum2 += num;
});
console.log(sum2); //2965

nums2.forEach(function (num, idx) {
  if (num === 1554) {
    console.log(idx); // 5
  }
});

// Map
nums2.map(function (num, inx) {
  if (num === 1554) {
    console.log(inx); //5
  }
});

let mappedNums = nums2.map(function (num, idx) {
  if (num === 1554) {
    console.log(idx);
  }
});
// console.log(mappedNums); //[ undefined, undefined, undefined, undefined, undefined, undefined ]

// by forEach
let eachedNums = nums2.forEach(function (num, idx) {
  if (num === 1554) {
    console.log(idx); // 5
  }
});
// console.log(eachedNums); //undefined

// map always should return something
let mappedNums2 = nums2.map(function (num, idx) {
  if (num === 1554) {
    return idx;
  }
  // return "bla bla bla"; // .
});
// console.log(mappedNums2); //[ undefined, undefined, undefined, undefined, undefined, 5 ]

// Filter
// it also always returns something
const nums3 = [12, 0, 53, -561, 785, 1554, 15, 115];
nums3.filter(function (num, idx) {
  if (num > 100) {
    console.log(num);
    // 785
    // 1554;
    // 115;
  }
});

let filteredNum = nums3.filter(function (num, idx) {
  if (num > 100) {
    return num;
  }
});
console.log(filteredNum); //[ 785, 1554, 115 ]

// Find
console.log(
  nums3.find(function (num, idx) {
    if (num > 100) {
      return num;
    }
  })
); // 785 // first accurance

// FindIndex
let indexFindedNums = nums3.findIndex(function (num, idx) {
  if (num > 100) {
    return num;
  }
});
console.log(indexFindedNums); // 4 => 785

// Reduce
const nums4 = [22, 12, 0, 53, 1, 785, 1554, 15, 11];
// let sum4 = nums4.reduce(function (acc, cur) {
//   console.log("Acc =", acc);
//   console.log("Cur =", cur);
//   return acc + cur;
// }, 0);
// console.log(sum4); // 2453

// reduceRight
let sum5 = nums4.reduceRight(function (acc, cur) {
  console.log("Acc =", acc);
  console.log("Cur =", cur);
  return acc + cur;
}, 0);
console.log(sum5); // 2453

//  Example

let numbers = [];
for (let i = 1; i <= 100; i++) {
  numbers.push(i);
}
console.log(numbers); // [1-100]

let filNums = numbers.filter(function (num, inx) {
  return num % 5 === 0;
});
// console.log(filNums); //[5,10 - 100]

let reducedFilNums = filNums.reduce(function (acc, cur) {
  return acc + cur;
});
console.log(reducedFilNums);

// This is by function

const numbers2 = [];
for (let i = 1; i <= 200; i++) {
  numbers2.push(i);
}
console.log(numbers2);

function divBy5(arr) {
  let filNums = arr.filter(function (num, inx) {
    return num % 5 === 0;
  });
  // console.log(filNums); //[5,10 - 100]

  let reducedFilNums = filNums.reduce(function (acc, cur) {
    return acc + cur;
  });
  console.log(reducedFilNums);
}
divBy5(numbers); // 1050
divBy5(numbers2); //4100
