// Math and String

console.log(Math.E); //2.718281828459045
console.log(Math.PI); //3.141592653589793
console.log(Math.SQRT1_2); //0.7071067811865476
console.log(Math.SQRT2); //1.4142135623730951
console.log(Math.LN2); //0.6931471805599453
console.log(Math.LN10); //2.302585092994046
console.log(Math.LOG2E); //1.4426950408889634
console.log(Math.LOG10E); //0.4342944819032518

// Math object methods
console.log(Math.round(6.35)); //6
console.log(Math.round(6.55)); //7
console.log(Math.ceil(6.000001)); //7
console.log(Math.floor(6.999999)); //6
console.log(Math.pow(3, 5)); // 243
console.log(Math.sqrt(16)); //4
console.log(Math.abs(-6)); // 6
console.log(Math.abs(6)); // 6
console.log(Math.min(12, 8, -1, 751)); // -1
console.log(Math.max(15, 456, -52, 0, 124)); //456
console.log(Math.random()); // 0.12874742424622054
console.log(Math.random()); // 0.2200237294474512 // every time changes

// String

let text = "Hello world!";
let text2 = "   Hello   world!    ";

console.log(text); //Hello world!
console.log(text.toLowerCase()); //hello world!
console.log(text.toUpperCase()); //HELLO WORLD!

console.log(text2); //   Hello   world!
console.log(text2.trim()); //Hello   world!

console.log(text.includes("wor")); // true
console.log(text.includes("wow")); // flase
console.log(text.includes("Hel", 0)); // true
console.log(text.includes("Hel", 5)); // false

console.log(text.indexOf("l")); // 2
console.log(text.indexOf("k")); // -1
console.log(text.indexOf("Hello")); // 0
console.log(text.indexOf("hellk")); // -1

console.log(text.lastIndexOf("l")); // 9
console.log(text.lastIndexOf("gh")); //-1

console.log(text.replace("l", "t")); //Hetlo world!
console.log(text.replace("K", "t")); //Hello world!

console.log(text.replace("Hello", "Hi")); //Hi world!
console.log(text.replace("No", "Hi")); //Hello world!

console.log(text.replaceAll("l", "t")); //Hetto wortd!

console.log(text.split()); // [ 'Hello world!' ] // returns an array
console.log(text.split(" ")); //[ 'Hello', 'world!' ]
console.log(text.split("l")); //[ 'He', '', 'o wor', 'd!' ]
console.log(text.split("")); // [ 'H', 'e', 'l', 'l','o', ' ', 'w', 'o','r', 'l', 'd', '!']

console.log(text.slice()); //Hello world!
console.log(text.slice(1)); //ello world!
console.log(text.slice(6)); //world!
console.log(text.slice(5, 9)); //wor
console.log(text.slice(true)); //ello world! // true = 1
console.log(text.slice("true")); //Hello world!

console.log(text.substring(6, 9)); //wor
console.log(text.substring(9, 6)); //wor
console.log(text.slice(9, 6)); //.
