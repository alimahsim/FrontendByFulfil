// // Letter counter function

// function vowelCounter(w) {
//   let counter = 0;
//   for (i = 1; i <= w.length; i++) {
//     counter++;
//   }
//   console.log(counter);
// }
// vowelCounter("Counttyside"); // 11

// Creating a function that counts vowel letters
// 1 version

// let vowels = ["a", "A", "o", "O", "e", "E", "u", "U", "i", "I"];
// function vowelCounter(w) {
//   let counter = 0;
//   for (i = 0; i < w.length; i++) {
//     for (let j = 0; j < vowels.length; j++) {
//       if (w[i] === vowels[j]) counter++;
//     }
//   }
//   console.log(counter);
// }
// vowelCounter("Web developer"); // 5

// // 2nd solution
// function vowelCounter(w) {
//   let vowels = ["a", "A", "o", "O", "e", "E", "u", "U", "i", "I"];
//   let counter = 0;
//   for (let i = 0; i < w.length; i++) {
//     if (vowels.includes(w[i])) {
//       counter++;
//     }
//   }
//   console.log(counter);
// }
// vowelCounter("Web developer"); // 5

// To be continued ...
