// FOR

// for (i = 0; i < 10; i++) {
//   console.log(i);
// }
// result = 0,1,2,3,4,5,6,7,8,9

// i = 0; = created variable here
// i < 10; = breaking point, it works until 10
// i++ = increasing variable everytime

// FOR IN

// const person = {
//   firstName: "Alibek",
//   lastName: " Nematov",
// };

// let fullName = "";

// for (let x in person) {
//   // 1st step = firstName;
//   // 2nd step = lastName;
//   fullName = fullName + person[x];
// }

// console.log(fullName);
// result = Alibek Nematov

// FOR OF

// const cars = ["GM", " Toyota", " BMW", " Lada"];

// let allCars = "";

// for (let car of cars) {
//     // 1 st step = "GM";
//     // 2 nd step = "Toyota";
//     // 3 rd step = "BMW";
//     // 4 th step = "Lada";
//   allCars += car;
// }
// console.log(allCars);
// result = GM Toyota BMW Lada

// const cars = ["GM", " Toyota", " BMW", " Lada"];

// let allCars = "";

// for (let car = 0; car < cars.length; car++) {
//   allCars += cars[car];
// }

// console.log(allCars);
// result = GM Toyota BMW Lada

// WHILE

// let number = 0;

// while (number < 10) {
//   console.log(number);
//   number++;
// }
// result = 0,1,2,3,4,5,6,7,8,9

// DO WHILE

// let number = 0;

// do {
//   console.log(number);
//   number++;
// } while (number < 10);

// result = 0,1,2,3,4,5,6,7,8,9

// BREAK

for (let i = 1; ; i++) {
  if (i % 10 === 0) {
    console.log("Mana o'sha raqam =>", i);
    break;
  } else {
    console.log(i);
  }
}
// result
// 1
// 2
// 3
// 4
// 5
// 6
// 7
// 8
// 9
// Mana o'sha raqam => 10

// CONTINUE
// We console.log only odd numbers

for (let i = 1; i < 10; i++) {
  if (i % 2 === 0) {
    continue;
    console.log("This code never appears in display"); // This one never appears
  } else {
    console.log("Mana o'sha raqam =>", i);
  }
}
// result
// Mana o'sha raqam => 1
// Mana o'sha raqam => 3
// Mana o'sha raqam => 5
// Mana o'sha raqam => 7
// Mana o'sha raqam => 9
