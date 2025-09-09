// EVENTS

// onclick
// 1
function sayHi() {
  alert("Hi");
}

let btnJS = document.querySelector("#btn2");
console.log(btnJS);
// 2
btnJS.onclick = sayHi;

// addEventListener
btnJS.addEventListener("click", sayHi);

// onload

// document.body.onload = () => {
//   console.log("Hello");
// };

// Mouse Events

//  mousedown
// clicked and holded

// mouseup
// clicked, holded and released

// click
// 1. mousedown + 2.mouseup = click

let btn3 = document.getElementsByTagName("button")[2];
console.log(btn3);

btn3.addEventListener("mousedown", () => {
  console.log("Mousdown");
});
btn3.addEventListener("mouseup", () => {
  console.log("Mouseup");
});
btn3.addEventListener("click", () => {
  console.log("Click");
});

// mouseenter
// works like CSS hover

// mouseleave
// opppsite of mouseenter

// Keyboard Events

// keydown
// keypress
// keyup
