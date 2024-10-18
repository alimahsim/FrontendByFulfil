// DOM

// console.log("Hello DOM!"); // Well it's working

// Now let's get into work

// console.log(window); // Global object
// console.log(document) // Main object

// Selecting Methods
// They selects elements of HTML from JS

// getElementById. takes only one element

let title = document.getElementById("title");
console.log(title);

// let menu = document.getElementById("menu");
// getElementsByClassName // returns an array
// let items = menu.getElementsByClassName("item");
// getElementsByTagName // returns an array
// let nav = document.getElementsByTagName("nav");

// console.log(menu, items, nav);

// querySelector // returns only the first and one element

// let itemHighlighted = document.querySelector(".item.highlight");
// console.log(itemHighlighted);

// querySelectorAll // returns all elements as an array and it forEach loop which is tremendously useful

// let allHighlightedItems = document.querySelectorAll(".item.highlight");
// console.log(allHighlightedItems);

// 2) Now changing selected HTML elements by JS

// innerHTML

// console.log(title.innerHTML); //Show with tags
// console.log(title.innerText); // Map for a Front-end dev // only texts

// title.innerHTML = " List of languages ";
// title.innerText = " List of languages ";

//3) Creating Elements in HTML via JS

// let u = document.createElement("u");
// console.log(u);

// u.innerText = "Underlined text";
// console.log(u);

// Adding created elements into HTML

// appendChild(var)
// let li = document.getElementById("liByJS");
// li.appendChild(u)

// append(var, "any text")
// li.append(u, " Extra words");

// let header = document.getElementsByTagName("h1")[0];
// console.log(header);
// header.remove();
// li.remove();

// Using attributes - getting and setting them

// Getting attributes
let input = document.getElementsByTagName("input")[0];
// console.log(input);

let inputByqs = document.querySelector("input");
// console.log(inputByqs);

console.log(inputByqs.getAttribute("placeholder"));

// Setting attribute
// inputByqs.setAttribute("value", "Nematov");
// console.log(inputByqs.getAttribute("value"));

// RemoveAttribute 
inputByqs.removeAttribute("value")
title.removeAttribute("id");



