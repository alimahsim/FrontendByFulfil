// MATH

// console.log(Math.E); // 2.718281828459045 = Euler number
// console.log(Math.PI); // 3.141592653589793 = PI
// console.log(Math.SQRT2); // 1.4142135623730951 = square root of 2 = Ildiz osti 2
// console.log(Math.SQRT1_2); // 0.7071067811865476 = square root of 1/2 = Izdiz osti 1/2
// console.log(Math.LN2); // 0.6931471805599453 = natural logorithm of 2
// console.log(Math.LN10); // 2.302585092994046 = natural logorithm of 10
// console.log(Math.LOG2E); // 1.4426950408889634 = base 2 logorithm of E
// console.log(Math.LOG10E); // 0.4342944819032518 = base 10 logorithm of E

console.log(Math.round(6.35)); // 6
console.log(Math.round(6.55)); // 7

console.log(Math.ceil(6.00000001)); // 7
console.log(Math.floor(6.99)); // 6

console.log(2 ** 3); // 8
console.log(Math.pow(2, 3)); // 8

console.log(Math.sqrt(16)); // 4

console.log(Math.abs(6)); // 6
console.log(Math.abs(-6)); // 6

console.log(Math.max(12, 16, 87, -4)); // 87
console.log(Math.min(12, 16, 87, -4)); // -4

const maxNum = [5, 97, -25, 36, -5, 55];
console.log(Math.max(...maxNum)); // 97

const minNum = [5, 97, -25, 36, -5, 55];
console.log(Math.min(...minNum)); // -25

console.log(Math.random()); // 0.44517273352446174 = changes each time between 0 and 1
console.log(Math.random()); // 0.7089008628766793

// STRING

// toLowerCase / toUpperCase

let text = "Hello world!";
console.log(text.toLowerCase()); // hello world!
console.log(text.toUpperCase()); // HELLO WORLD!

// trim()

let text2 = "   Hello world!    ";
console.log(text2.trim());

// Includes("")

let text3 = "Hello world!";
console.log(text3.includes("wo")); // true
console.log(text3.includes("ol")); // false

console.log(text3.includes("wo", 10)); // false => here the 10 means the starting index

// indexOf("")

let text4 = "Hello world!";
console.log(text4.indexOf("wo")); // 9 => shows the index number
console.log(text4.indexOf("l")); // l => Shows the first "l" letter
console.log(text4.indexOf("sf")); // -1 => is there isn't such letter returns -1

// lastIndexOf("")
console.log(text4.lastIndexOf("l")); // 9 => Takes the last index of that letter

// replace("", "")
let text5 = "Hello world!";
console.log(text5.replace("Hello", "Hi")); // Hi world!

// If there isn't such kind of letter it keeps the original version

console.log(text5.replace("Helloshdhs", "Hi")); // Hello world!

console.log(text5.replace("l", "q")); // Heqlo world! => but changes only 1 letter

// for changing all of them , use the replaceAll("", "")
console.log(text5.replaceAll("l", "q")); // Heqqo worqd!

// SPLIT
// Returns an Arrray

let text6 = "Hello world, wait for me, I'm coming";
console.log(text6.split(" ")); // [  'Hello', 'world,','wait','for', 'me,', "I'm",'coming']
console.log(text6.split("w")); // [ 'Hello ', 'orld, ', "ait for me, I'm coming" ]

// SLICE
//  Slices letter by indexes
let text7 = "Hello world, wait for me, I'm coming";

// Now take the "for" word ("f", "o" and "r") letters

console.log(text7.slice(22)); // me, I'm coming => takes letters from the shown index to the end
console.log(text7.slice(17, 22)); // for
console.log(text7.slice(-1)); // g => Even taked - index too

// SUBSTRING
let text8 = "Hello world, wait for me, I'm coming";
console.log(text8.substring(10, 6)); // worl
console.log(text8.substring(6, 10)); // worl

console.log(text8.slice(10, 6)); // ... empty
console.log(text8.slice(6, 10)); // worl

// SUBSTR
let text9 = "Hello world, wait for me, I'm coming";
console.log(text9.substr(6, 3)); // wor => From 6th index takes given letters
