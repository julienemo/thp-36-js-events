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
let editBtn1 = document.querySelector(".btn-outline-secondary");
var targetCard1 = document.querySelector(".card-text");

// attempted to put target in the brackets
// which means func will have brackets when called
// which triggers automatically
// so....didn't work out
function turnTextToRed(){
  targetCard1.style.color = 'red';
}
editBtn1.addEventListener("click",turnTextToRed);


// function 4
let editBtn2 = document.getElementsByClassName("btn-outline-secondary")[1];
var targetCard2 = document.getElementsByClassName("card-text")[1];
var alreadyGreen = false;

// this gets quickly confusing
// make sure the conditions match the action
// make sure the true and false be where they should
function toggleColor(){
  if (alreadyGreen){
    targetCard2.style.color = '';
    alreadyGreen = false;
  } else {
    targetCard2.style.color = 'green';
    alreadyGreen = true;
  }
}

editBtn2.addEventListener("click",toggleColor);


// function 5
// looking for a more elegant way.....
let navBar = document.getElementsByTagName("header")[0];
let targetLink = document.getElementsByTagName("link")[0];
console.log(targetLink);
console.log(navBar);
let alreadyDisactivated = false;

function toggleBootstrap(){
  if (alreadyDisactivated){
    targetLink.href = "https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css";
    alreadyDisactivated = false;
  }else{
    targetLink.href = "";
    alreadyDisactivated = true;
  }
}
navBar.addEventListener("dblclick",toggleBootstrap);
