// querySelector for the button
let buttonLeft = document.querySelector("#btnLeft");
let buttonRight = document.querySelector("#btnRight");
let pacman = document.querySelector("#pacman");

// pacman value
let pacmanTop = pacman.style.top;
let pacmanLeft = pacman.style.left;

console.log(pacmanTop);

//  detect mouse click

// 1. onclick event
// declare a function
// call the function when the button is clicked at the HTML
function buttonUpClick() {
  console.log("button up");
  pacman.style.top = "100px";
  // get the current value of the top
  // https://stackoverflow.com/questions/4860244/how-to-delete-px-from-245px
  let pacmanTop = parseInt(pacman.style.top, 10);
  // change the value of the top by 100px increment
  pacman.style.top = pacmanTop - 100 + "px";
}

function buttonDownClick() {
  console.log("button down");
  pacman.style.top = "100px";
  // get the current value of the top
  // https://stackoverflow.com/questions/4860244/how-to-delete-px-from-245px
  let pacmanTop = parseInt(pacman.style.top, 10);
  // change the value of the top by 100px increment
  pacman.style.top = pacmanTop + 100 + "px";
}

// 2. addEventListener
// set id for the button
// declare a function
function buttonLeftClick() {
  console.log("button left");
  pacman.style.left = "100px";
  // get the current value of the top
  // https://stackoverflow.com/questions/4860244/how-to-delete-px-from-245px
  let pacmanTop = parseInt(pacman.style.left, 10);
  // change the value of the top by 100px increment
  pacman.style.left = pacmanTop - 100 + "px";
}
function buttonRightClick() {
  console.log("button right");
  pacman.style.left = "100px";
  // get the current value of the top
  // https://stackoverflow.com/questions/4860244/how-to-delete-px-from-245px
  let pacmanTop = parseInt(pacman.style.left, 10);
  // change the value of the top by 100px increment
  pacman.style.left = pacmanTop + 100 + "px";
}

// addEventListener
buttonLeft.addEventListener("click", buttonLeftClick);
buttonRight.addEventListener("click", buttonRightClick);
