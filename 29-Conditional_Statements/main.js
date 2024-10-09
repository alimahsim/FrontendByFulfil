//  Conditional Statements

// && = and => If only one statement is False all of them is False
// || = or => If only one statement is True, all of them is converted into True, namely opposet of &&
// != not => If statement is True it converts it into False, if it's just opposit it converts into True

// false = 0;
// true = 1;

// console.log(1 && 0); // 0
// console.log(1 || 0); // 1
// console.log(!true); // false
// console.log(!false); // true

// IF

// let age = 20;

// if (age >= 16) {
//   console.log("You are an adult");
// }
// You are an adoult

// let age2 = 15;

// if (age >= 16) {
//   console.log("You are an adult");
// }
// ...

// IF / ELSE

// let customerAge = 50;
// let customerAge = 5;

// if (customerAge <= 8) {
//   console.log("Enterence to the park is free for you!");
// } else {
//   console.log("You must to pay for entering to the park");
// }

// ELSE IF

// let customerAge = 5;
// let customerAge = 15;
// let customerAge = 35;

// if (customerAge <= 8) {
//   console.log("Enterence to the park is free for you!");
// } else if (customerAge >= 8 && customerAge <= 16) {
//   console.log("You must pay $1 for entering to the park");
// }else if (customerAge ){

// }
//  else {
//   console.log("You must pay $5 for entering the park ");
// }

// SWITCH CASE

// First let's do it by If statement

// let weekDay = 6; // Today is Saturday
// let weekDay = 1; // "Today is Monday"
// let weekDay = 8; // "There isn't this kind of day in the week days"

// if (weekDay === 1) {
//   console.log("Today is Monday");
// } else if (weekDay === 2) {
//   console.log("Today is Tuesday");
// } else if (weekDay == 3) {
//   console.log("Today is Wednesday");
// } else if (weekDay === 4) {
//   console.log("Today is Thursday");
// } else if (weekDay === 5) {
//   console.log("Today is Friday");
// } else if (weekDay === 6) {
//   console.log("Today is Saturday");
// } else if (weekDay === 7) {
//   console.log("Today is Sunday");
// } else {
//   console.log("There isn't this kind of day in the week days");
// }

// By Switch case

// let weekDay = 5;

// switch (weekDay) {
//   case 1:
//     console.log("Today is Monday");
//   case 2:
//     console.log("Today is Tuesday");
//   case 3:
//     console.log("Today is Wednesday");
//   case 4:
//     console.log("Today is Thursday");
//   case 5:
//     console.log("Today is Friday");
//   case 6:
//     console.log("Today is Saturday");
//   case 7:
//     console.log("Today is Sunday");
//   default:
//     console.log("There isn't this kind of day in the week days");
// }

// Result
//Today is Friday
// Today is Saturday
// Today is Sunday
// There isn't this kind of day in the week days

// If we don't put the "break" command, It dosn't stop

// let weekDay = 5;

// switch (weekDay) {
//   case 1:
//     console.log("Today is Monday");
//     break;
//   case 2:
//     console.log("Today is Tuesday");
//     break;
//   case 3:
//     console.log("Today is Wednesday");
//     break;
//   case 4:
//     console.log("Today is Thursday");
//     break;
//   case 5:
//     console.log("Today is Friday");
//     break;
//   case 6:
//     console.log("Today is Saturday");
//     break;
//   case 7:
//     console.log("Today is Sunday");
//     break;
//   default:
//     console.log("There isn't this kind of day in the week days");
// }

// Result = Today is Friday

// Ternary opators => ? and :

// let age = 20;
// console.log(age >= 16 ? "You have gotten your passport" : "You've not gotten your passport")

// Another way to do it

// let age = 20; // You are an adult
// let age = 10; // You are an adult
// r = age >= 16 ? "You are an adult" : "You are a kid";

// console.log(r);

// let customerAge = 35;

// let r = customerAge <= 8
//     ? "Enterence to the park is free for you!"
//     : customerAge >= 8 && customerAge <= 16
//     ? "You must pay $1 for entering to the park"
//     : "You must pay $5 for entering the park ";

// console.log(r); //You must pay $5 for entering the park 


