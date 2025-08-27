// Info: JS => Vanilla JS => Pure JS

// EVENTS

console.log("Hi it's JS");

// Click event
// 1
const clickHandler = () => {
  alert("ClickHTML clicked");
};

// 2
function clickHandler2() {
  alert("ClickJS clicked");
}

let btn = document.getElementById("btnJS"); // by id
console.log(btn);

// let qbtn = document.querySelector("#btnJS"); // by querySelector
// console.log(btn);

// 2.1
// btn.addEventListener("click", clickHandler2);

// 2.2
// btn.addEventListener("click", () => alert("ClickJS clicked"));

// 3
// btn.onclick = clickHandler2; // Given HTML onclick att. ecualed to ClickHandler2 function

// Load events

// DOMcontentLoaded => When HTML uploaded then it works
// load => after DOMcontentLoaded it works
// unload => After finised works it works

// Mouse events

// mousedown // it works when left side of mouse clicked and hold

// mousesup // it works when clicked button released

// click // it works when the first two (mousedown and mouseup) finished they work

btn.addEventListener("mousedown", () => console.log("This is mouseDOWN"));
btn.addEventListener("mouseup", () => console.log("This is mouseUP"));
btn.addEventListener("click", () => console.log("This is CLICK"));
// They work in order


// mousenter // it works when mouse hovers

// mouseleave // it works when mouse hover leaves


// Keyword events // 

// keydown // it works when keyword pressed 

// keypress // it works when symbol keys pressed 

// keyup // it works when released keyword buttons 

document.body.addEventlistener("keydown", ()=> console.log("Keydown worked"));

// They work orderly 


