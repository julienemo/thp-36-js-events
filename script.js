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
// seems that the way to go is pass a params in brackets as event trigger
// then pass the func in event handler WITHOUT brackets and with ,false mention
// though don't really understand -_-!
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
let navBar = document.getElementsByTagName("header")[0];
let targetLink = document.getElementsByTagName("link")[0];
// so far I understood only a link tag can be disabled
// whereas an href can't apply disabled method
function toggleBootstrap(){
  if (targetLink.disabled === true){
    targetLink.disabled = false;
  } else {
    targetLink.disabled = true;
  }
}

navBar.addEventListener("dblclick",toggleBootstrap);


// function 6
// the following won't be messed up by card mouvements
// I understood that, since JS pass certains things by value and others by reference
// traditional iteration with index results in index being passed by value
// and other stuff by reference
// so the solution is NOT USING index
// simple collection iteration such as foreach
// or more complicated logics such as, finding the button by index
// and other stuff by parentElement
// make things work
function hideCard(btn){
  var card = btn.target.closest('.card');
  var image = card.getElementsByClassName("card-img-top")[0];
  var text = card.getElementsByClassName("card-text")[0];
  var hover = text.style.visibility == 'hidden'

  if(hover){
    text.style= "";
    image.style = "";
    hover = false;
  } else {
    text.style= "visibility:hidden";
    image.style = "width:20%;";
    hover = true;
  }
}

let buttons = document.getElementsByClassName("btn-success");
for(let i = 0; i < buttons.length; i++){
  var viewBtn = buttons[i];
  // and note that we CAN pass argument in event handler funcs with brackets
  // don't know clearly how that works out but
  // when the argement is the event trigger
  // and when func defined with arg but passed without
  // and followed by false, it works...
  viewBtn.addEventListener("mouseover", hideCard, false)
}

//* function 7
// no, didn't manage to fix the lag T_T
let blocks = document.getElementsByClassName("col-md-4");

let switchBtn1 = document.getElementsByClassName("my-2")[1];
let album = document.getElementsByClassName("row")[1];
function switchCards(){
  album.insertBefore(blocks[blocks.length-1], blocks[0]);
}

switchBtn1.addEventListener("click",switchCards);


// function 8
// note there is a difference between disabling a link tag
// and disabling the href of an a tag
// for the former, a simple disabled = true
// for the latter, need to removeAttribute("href")
let switchBtn2 = document.getElementsByClassName("btn-primary")[0];
let externalLink = document.getElementsByTagName("a")[4]
externalLink.removeAttribute("href");
function switchBack(){
  album.insertBefore(blocks[0], blocks[blocks.length]);
}
// note how it is possible to insert before a fictive "last element" that doesn't exist
switchBtn2.addEventListener("click",switchBack);
