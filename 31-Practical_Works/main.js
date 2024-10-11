// TASK 1
// Creating a function finds even numbers from given numbers by a user

// function showEvenNums(n) {
//   for (let i = 1; i < n; i++) {
//     if (i % 2 === 0) {
//       console.log(i + " is an even number");
//     }
//   }
// }
// showEvenNums(10);
// showEvenNums(100);

// TASK 2
// function dividersTo12225(n) {
//   for (let i = 1; i <= 1225 * n; i++) {
//     if (i % 1225 === 0) {
//       console.log(i);
//     }
//   }
// }
// // dividersTo12225(5);
// dividersTo12225(10);

// TASK 3
// Drawning triangle

// function drawTriangle(n) {
//   let r = "";
//   for (let i = 1; i <= n; i++) {
//     r = r + " " + i;
//     console.log(r);
//   }
// }
// // drawTriangle(10)
// drawTriangle(30);

// TASK 4
// Summary of all array items

// const nums = [15, 26, 60, 1, 6, 10, 8];

// function sumOfArrItems(numbers) {
//   let result = 0;
//   for (let i = 0; i < numbers.length; i++) {
//     result += numbers[i];
//   }
//   console.log(result);
// }
// sumOfArrItems(nums);

// Usingn "return"

// const nums = [15, 26, 60, 1, 6, 10, 8];

// function sumOfArrItems(numbers) {
//   let result = 0;
//   for (let i = 0; i < numbers.length; i++) {
//     result += numbers[i];
//   }
//   return result;
// }

// let r = sumOfArrItems(nums);

// console.log(r);

// const number = 265654;

// function sumNums(p) {
//   let r = 0;
//   let stringedNum = p.toString();

//   for (let i = 0; i < stringedNum.length; i++) {
//     r += parseInt(stringedNum[i]);
//   }
//   //   return r;
//   console.log(r);
// }

// let result = sumNums(number);
// console.log(result); // 28

// sumNums(123456789); // 45

// TASK 5
// Finding the same items of two Arrays

// const nums1 = [5, 8, 9, 10, 41, 52, 7];
// const nums2 = [11, 8, 19, 101, 41, 54, 7, 18, 35];

// function finderSameItems(p1, p2) {
//   let counter = 0;
//   for (let i = 0; i < p1.length; i++) {
//     for (let j = 0; j < p2.length; j++) {
//       if (p1[i] === p2[j]) {
//         console.log(p1[i]); // or p2[j]
//         counter++;
//       }
//     }
//   }
//   return counter;
// }

// let r = finderSameItems(nums1, nums2);
// console.log(r);
