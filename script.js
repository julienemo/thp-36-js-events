//function 1-bis
let myFooter = document.querySelector("footer");
let i = 1;
function footerEffect(){
  console.log(`Click number ${i}.`);
  i++;
}

myFooter.addEventListener("click",footerEffect);


// function 2
// attention, trigger !== current target in this exercise
var navHeader = document.getElementById("navbarHeader");
let btn = document.getElementsByClassName("navbar-toggler-icon")[0];
function drop(){
  navHeader.classList.toggle("collapse");
}
btn.addEventListener("click", drop);


// function 3
let editBtn = document.querySelector(".btn-outline-secondary");
var targetCard = document.querySelector(".card-text");

// attempted to put target in the brackets
// which means func will have brackets when called
// which triggers automatically
// so....didn't work out
function turnTextToRed(){
  targetCard.style.color = 'red';
}
editBtn.addEventListener("click",turnTextToRed);
