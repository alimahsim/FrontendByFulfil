// LOOPS

// For
for (let i = 0; i < 10; i++) {
  console.log(i);
}
// Debugging the code
//let i => creating new variable
// i < 10 => until 10
// i++ => iterating the variable

// for ... in
// for objects

const person = {
  name: "Alibek",
  surname: "Nematov",
  age: 38,
};

const personInfo = function () {
  let allInfo = "";
  for (let info in person) {
    allInfo = allInfo + person[info];
  }
  return allInfo;
};

console.log(personInfo(person));

// for ... of
// for arrays

const colors = ["red", "green", "blue", "black"];

const addAllColors = function () {
  let allColors = "";
  for (let color of colors) {
    allColors += color;
  }
  return allColors;
};
console.log(addAllColors());

// This code is in "For"

let colors2 = ["white", "lightblue", "puple"];

let allColors2 = "";
for (let i = 0; i < colors2.length; i++) {
  allColors2 = allColors2 + colors2[i];
}
console.log(allColors2);
// console.log(colors2);

// While
// let i = 0;
// while (i < 10) {
//   console.log(i);
//   i++;
// }

// do ... while
// let i = 0;
// do {
//   console.log(i);
//   i++;
// } while (i < 25);

let i = 100;

do {
  console.log(i);
  i++;
} while (i < 25);
// result is 100
// "The do...while loop logs at least once although the condition is false.";

// Break

for (let i = 1; ; i++) {
  if (i % 1225 === 0) {
    // console.log("Evrika");
    break;
  } else {
    // console.log(i);
  }
}

// Continue

for (let i = 0; i < 10; i++) {
  if (i % 2 === 0) {
    console.log("Even");
    continue;
  } else {
    console.log(i);
  }
}
