// Practices

// 1
const number = 29;
// console.log(number);

let numToStr = number.toString();
// console.log(numToStr);

let arrNumber = numToStr.split("");
// console.log(arrNumber);

// if (arrNumber[0] > arrNumber[1] || arrNumber[0] === arrNumber[1]) {
//   console.log(true);
// } else {
//   console.log(false);
// }

// Creating function for these

function largestSwap(n) {
  let numToStr = n.toString();
  let arrNumber = numToStr.split("");

  if (arrNumber[0] > arrNumber[1] || arrNumber[0] === arrNumber[1]) {
    console.log(true);
  } else {
    console.log(false);
  }
}
// largestSwap(33) // true
// largestSwap(73) // true
// largestSwap(13) // false

function largeSwap(n) {
  return Number(n.toString()[0]) >= Number(n.toString()[1]);
}
// console.log(largeSwap(10));

// 2
function drop(arr, num) {
  return arr.slice(num);
}
console.log(drop([1, 2, 3], 1));
console.log(drop([1, 2, 3, 100, 5], 5));
console.log(drop([1, 2, 3, 100, 5], 3));

// 3
//  Convert Time 09:35 PM

// 09:35 PM => 21:35
// 09:35 AM => 09:35

function convertTime(time) {
  let r = "";
  // console.log(hour);
  if (time.split(" ")[1] === "PM") {
    let hour = time.slice(0, 2);
    let hourNum = Number(hour) + 12;
    if (hourNum === 24) {
      hourNum = "00";
    }
    r = hourNum + time.slice(2, 5);
  } else {
    r = time.slice(0, 6);
  }
  return r;
}
console.log(convertTime("09:35 PM"));
console.log(convertTime("09:35 AM"));
console.log(convertTime("12:00 AM"));
console.log(convertTime("12:00 PM"));

// 4
function getNumsToN(n) {
  let r = [];
  for (let i = 1; i < n; i++) {
    r.push(i);
  }
  return r;
}
console.log(getNumsToN(9));

// 5
let name = "Alibek";
let surname = "Nematov";

function findVawels(str) {
  let strToArr = str.split("");
  // console.log(strToArr);
  let vowels = ["A", "a", "O", "o", "E", "e", "U", "u", "I", "i"];
  let counter = 0;
  for (let i = 0; i <= strToArr.length; i++) {
    for (let j = 0; j < vowels.length; j++) {
      if (strToArr[i] === vawels[j]) {
        counter++;
      }
    }
  }
  return counter;
}
// console.log(findVawels(name));
// console.log(findVawels(surname));

// 5

function findVawels(str) {
  let strToArr = str.split("");
  // console.log(strToArr);
  let vowels = ["A", "a", "O", "o", "E", "e", "U", "u", "I", "i"];
  let counter = 0;
  strToArr.forEach(function (el) {
    vowels.forEach(function (item) {
      if (el === item) {
        counter++;
      }
    });
  });
  return counter;
}
// console.log(findVawels(name));
// console.log(findVawels(surname));

// 5

function findVawels(str) {
  let counter = 0;
  let vowels = ["A", "a", "O", "o", "E", "e", "U", "u", "I", "i"];
  for (let i = 0; i < str.length; i++) {
    if (vowels.includes(str[i])) {
      counter++;
    }
  }
  return counter;
}
// console.log(findVawels(name));
// console.log(findVawels(surname));

// 5
function findVawels(str) {
  let counter = 0;
  let vowels = ["A", "a", "O", "o", "E", "e", "U", "u", "I", "i"];
  for (let i = 0; i < vowels.length; i++) {
    if (str.includes(vowels[i])) {
      counter++;
    }
  }
  return counter;
}
console.log(findVawels(name));
console.log(findVawels(surname));
