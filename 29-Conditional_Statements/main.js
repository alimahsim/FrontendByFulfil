// Conditional operators

// AND = * = &&
// OR = + = ||
// NOT = !(value)

console.log(true || false); // true
console.log(false && true); // false
console.log(!true); // false

// More complex
console.log((false && "Jone") || 15); // 15
console.log(false || ("Jone" && []) || !true); // []

console.log(false || !true || "" || "Jone" || undefined || null); // "Jone" => stops at TURE
console.log(false || !true || "" || null || undefined); // undefined => if all are FALSE stops at LAST

console.log(true && "Jone" && 15 && [] && null && undefined && !true); // null => stops at TRUE
console.log(true && !false && "1" && 10 && [] && {}); // {} => if all correct stops at LAST

console.log(
  null || (undefined && true) || ("Jone" && []) || (true && "") || !true
);

// Debugging
console.log(null || undefined); //undefined
console.log(undefined && true); // undefined
console.log(undefined || []); // []
console.log([] || ""); // ""
console.log("" || !true); // false

// Conditional Statements (if else)

// if
// when statement is true, and get result
let age = 22;

if (age >= 16) {
  console.log("You have got a passport");
}

// when statement is false, and we don't get the result
let age2 = 12;

if (age2 >= 16) {
  console.log("You have got a passport");
}

// if else
let age3 = 15;

if (age3 >= 16) {
  // when the statement is false "else" block works
  console.log("You have got a passport");
} else {
  // "else" block don't have the statement = () and code runs in any case
  console.log("You didn't get the passport");
}

// "if" "else if" "else"

let skill = 0;
if (skill == 1) {
  console.log("You are Junior developer!");
} else if (skill > 1 && skill <= 2) {
  console.log("You are Middle devoloper!");
} else if (skill >= 3) {
  console.log("You are Senior devoloper!");
} else {
  console.log("What a hell are you?");
} // We can continue as many cases as we wont with "else if"

// Switch case

// Before it, solution with "if"
let weekDay = 10;

if (weekDay === 1) {
  console.log("It is Monday");
} else if (weekDay === 2) {
  console.log("It is Tuesday");
} else if (weekDay === 3) {
  console.log("It is Wednesday");
} else if (weekDay === 4) {
  console.log("It is Thursday");
} else if (weekDay === 5) {
  console.log("It is Friday");
} else if (weekDay === 6) {
  console.log("It is Saturday");
} else if (weekDay === 7) {
  console.log("It is Sunday");
} else {
  console.log("No this kind of week day man!");
}

// Now switch case

let weekDay2 = 5;

switch (weekDay2) {
  case 1:
    console.log("It is Monday");
  case 2:
    console.log("It is Tuesday");
  case 3:
    console.log("It is Wednesday");
  case 4:
    console.log("It is Thursday");
  case 5:
    console.log("It is Friday");
  case 6:
    console.log("It is Saturday");
  case 7:
    console.log("It is Sabday");
  default:
    console.log("What a rubbish input man!");
} // from Friday all worked because there is not "break"

// Switch case with "break"

let weekDay3 = 1;

switch (weekDay3) {
  case 1:
    console.log("It is Monday");
    break;
  case 2:
    console.log("It is Tuesday");
    break;
  case 3:
    console.log("It is Wednesday");
    break;
  case 4:
    console.log("It is Thursday");
    break;
  case 5:
    console.log("It is Friday");
    break;
  case 6:
    console.log("It is Saturday");
    break;
  case 7:
    console.log("It is Sabday");
    break;
  default:
    console.log("What a rubbish input man!");
} // When it finds the right answer it stops
// Switch case checkes numbers with "==="

// Ternary Operators => ? and :

let age4 = 55;

console.log(age4 >= 16 ? "You have got a passport!" : "You are a kid!");
// ? => if
// : => else

let skill2 = -1;

console.log(
  skill2 > 0 && skill2 <= 2
    ? "You are a Junior"
    : skill2 > 2 && skill2 < 4
    ? "You are Middle"
    : skill2 > 4
    ? "You are Senior"
    : "What a hell are you?"
);

// String

let name = "Ali";
surname = "Nematov";

// loging by comma = ,
console.log(name, surname); //Ali Nematov

// logging by plus = +
// Concatination
console.log(name + surname); //AliNematov

// logging by backtick = ``
console.log(`${name} ${surname}`); // Ali Nematov and it is the best way to do
// or
let result = `${name} ${surname}`;
console.log(result); // Ali Nematov
