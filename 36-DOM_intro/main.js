console.log("DOM");

// Window
// console.log(window);

// Document
// console.log(document);

// Selecting HTML elements into JS
// getElementById()

let title = document.getElementById("title");
console.log(title); // <h1 id="title">DOM Introduction</h1>;

let menu = document.getElementById("menu");
console.log(menu); //<ul id="menu"></ul>

// getElementByTagName
let nav = document.getElementsByTagName("nav");
console.log(nav); // HTMLCollection [nav]

// getElementsByClassName()
let items = document.getElementsByClassName("item");
console.log(items); // HTMLCollection(3) [li.item, li.item, li.item]

// CSS Selectors
// querySelector(.)
let liHighlighted = document.querySelector(".item.highlight");
console.log(liHighlighted); //<li class="item highlight">JS</li>

// querySelectorAll(.)
let liHighlightedAll = document.querySelectorAll(".item.highlight");
console.log(liHighlightedAll);

// ====================================================

// Changing HTML elements

console.log(title.innerHTML);
console.log(title.innerText);

title.innerHTML = "DOM INTRO BY JS";
/* <h1 id="title">DOM Introduction</h1> */ // changed

title.innerText = "DOM intro by InnerText";

// Creating new HTML elements via JS

// appendChild

let liJS = document.createElement("li");
// console.log(h1);
liJS.innerText = "C# by JS";
// console.log(h1);

menu.appendChild(liJS);

// append

menu.append("as", "many", "as", "messages");

// Removing elements

// remove
// title.remove()
// liJS.remove()

let inputJs = document.getElementsByTagName("input");
console.log(inputJs); // returns an array

let firInputJs = document.getElementsByTagName("input")[0];
console.log(firInputJs); // so get 1 one

let secInputJS = document.getElementsByTagName("input")[1];
console.log(secInputJS); // second input

// getAttribute

console.log(firInputJs.getAttribute("placeholder")); // Inter your name
console.log(secInputJS.getAttribute("value")); // press

// setAttribute
secInputJS.setAttribute("id", "name"); // <input type="button" value="press" id="name">

// removeAttribute
secInputJS.removeAttribute("id"); // <input type="button" value="press">
