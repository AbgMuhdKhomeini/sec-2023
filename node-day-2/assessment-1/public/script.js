window.addEventListener("keydown", function (event) {
  console.dir(event);

  if (event.keyCode === event.keyCode) {
    let pkeyCode = document.querySelector("#keyCode");
    pkeyCode.innerText = event.keyCode;
  }
  if (event.code === event.code) {
    let pcode = document.querySelector("#code");
    pcode.innerText = event.code;
  }

  if (event.key === event.key) {
    let pkey = document.querySelector("#key");
    pkey.innerText = event.key;
  }
});
