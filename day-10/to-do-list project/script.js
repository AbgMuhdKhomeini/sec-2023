// get input value

//let inputDOM = document.querySelector("#todo");
// let buttonDOM = document.querySelector("#add");
let formDOM = document.querySelector("#todoForm");
//function buttonClicked() {
// console.log("button click");
//}

//buttonDOM.addEventListener("click".buttonClicked);

function formSubmitted(event) {
  event.preventDefault();
  // let value = event.target[0].value;

  let formData = new FormData(event.target);
  let value = formData.get("todo");
  console.log(value);
}

formDOM.addEventListener("submit", formSubmitted);
