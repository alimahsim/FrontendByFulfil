// Task 1
//  Finding of the summary of Array elements

// let numArr = [2, 15, 12, 2.5, 66, 70, 50];

// const findSumArr = function (arr) {
//   let sum = 0;
//   for (let el of arr) {
//     // console.log(el);
//     sum += el;
//   }
//   console.log(sum);
// };
// findSumArr(numArr);

//  Task 2
// const sumEachNum = function (n) {
//   let newNum = 0;
//   n = n.toString();
//   // console.log(n);

//   for (let i = 0; i < n.length; i++) {
//     // console.log(i);
//     newNum += parseInt(n[i]);
//   }
//   return newNum;
// };

// console.log(sumEachNum(232523));

// Task 3
let numArr = [455, 13, 0, -1, 52];

function bigDig(params) {
  let result = params[0];
  // console.log(params[0]);

  for (el of params) {
    console.log(el);

    if (result > el) {
      // el = result
      console.log(result);
    }
  }
}

// console.log(bigDig(numArr));

// let numArr2 = [10, 13, 0, -1, 52, 40];
// let numArr3 = [12, 13, 10, -12, 5];

// function difOfTwoArr(arr1, arr2) {
//   let counter = 0;
//   // let a = 0;
//   for (let i = 0; i < arr1.length; i++) {
//     for (let j = 0; j < arr2.length; j++) {
//       if (arr1[i] === arr2[j]) {
//         counter++;
//         // console.log(arr1[i]);
//       }
//       // a++;
//       // console.log(a);
//     }
//   }
//   return counter;
// }
// console.log(difOfTwoArr(numArr2, numArr3));
