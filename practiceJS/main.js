// For 29-lesson

// Task 1
// Indentifing that the number is even or odd

// let n = 5;
// console.log(n % 2 === 0 ? "This is an even number" : "This is an odd number");

// By function
const findNum = function (n) {
  console.log(n % 2 === 0 ? "This is an even number" : "This is an odd number");
};
// findNum(131);

// Task 2

const person = function (age) {
  if (age > 0 && age < 7) {
    console.log("You are an infant");
  } else if (age <= 16 && age >= 7) {
    console.log("You are a pupil!");
  } else if (age > 16 && age <= 25) {
    console.log("You are a student!");
  } else if (age > 25 && age <= 60) {
    console.log("You are an employed!");
  } else if (age > 60 && age <= 120) {
    console.log("You are a persioner!");
  } else {
    console.log("What a hell are you?");
  }
};
// person(1);

// Task 3
const bigSum = function (x, y, z) {
  if (x + y > x + z && y + z) {
    console.log(`1 - case ${x + y} is the biggest sum`);
  } else if (y + z > x + z && x + y) {
    console.log("2-case", y + z, "is the biggest sum");
  } else if (z + x > x + y && z + x) {
    console.log("3-case", z + x, " is the biggest sum");
  }
};
// bigSum(5, 4, 10);

// 30 lesson

// Task1
// Finding even numbers

const evenNum = function (num) {
  if (num % 2 === 0) {
    console.log(num, "is the even number");
  } else {
    console.log(num, "is the odd number");
  }
};
// evenNum(200);
// evenNum(131);

// Task 2
// 1225

const find1225 = function (n) {
  let total = 1225 * n;
  for (let i = 0; i <= total; i++) {
    if (i % 1225 === 0) {
      console.log(i);
    }
  }
};
// find1225(10);

// Task 3
const tree = function (n) {
  let str = "";
  for (let i = 1; i <= n; i++) {
    str = str + " " + i;
    console.log(str);
  }
};
// tree(15);
// 31 - lesson

const numArr = [53, 15, 105, 852, -1, 0];
// const numArr2 = [55, 15, 105, 85, -82, 1];

function minMax(arr) {
  let bigOne = arr[0];
  let smallOne = arr[0];

  for (let i = 1; i <= arr.length; i++) {
    if (arr[i] > bigOne) {
      bigOne = arr[i];
    }
    if (arr[i] < smallOne) {
      smallOne = arr[i];
    }
  }
  return `"${bigOne}" is the biggest one and "${smallOne}" is small one`;
}
// console.log(minMax(numArr));

// Task
const numsInWords = [
  "Nil",
  "One",
  "Two",
  "Three",
  "Four",
  "Five",
  "Six",
  "Seven",
  "Eight",
  "Nine",
];
const text = "5 headed dragon";

function changeNumIntoWords(arr) {
  let spliter = arr.split(" ");
  // console.log(spliter);
  for (let i = 0; i < spliter.length; i++) {
    // console.log(el);
    for (let j = 0; j < 10; j++) {
      // console.log(i);
      if (spliter[i] == j) {
        spliter[i] = numsInWords[j];
        // console.log(el);
      }
      // console.log(numsInWords[i]);
    }
  }
  return spliter.join(" ");
}

console.log(changeNumIntoWords(text)); // Five headed dragon
