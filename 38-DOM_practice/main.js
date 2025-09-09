let arrow = document.querySelector(".arrow")
console.log(arrow);


const dropIt = function(){
  arrow.classList.toggle("d_block")
};
 arrow.addEventListener("click", dropIt);