"use strict";
``;

document.getElementById("from").addEventListener("input", function () {
  const inputValue = this.value;
  document.getElementById("output").textContent = inputValue;
});
// ----------------------------------------------
const messageBtn = document.querySelector(".messageBtn");
const message = document.querySelector(".message");

messageBtn.addEventListener("click", function () {
  message.classList.add("animate_animated", "animate_fadeInLeftBig");
  message.style.visibility = "visible";
});
//===================================================


function validateForm() {
  const input1 = document.getElementById("input1");
  const input2 = document.getElementById("input2");

  if (input1.value === "") {
    input1.classList.add("error");
  } else {
    input1.classList.remove("error");
  }

  if (input2.value === "") {
    input2.classList.add("error");
  } else {
    input2.classList.remove("error");
  }

  if (input1.value !== "" && input2.value !== "") {
    document.getElementById("form").submit();
  }
}

document.getElementById("input1").addEventListener("input", function () {
  if (this.value === "") {
    this.classList.add("error");
  } else {
    this.classList.remove("error");
  }
});

document.getElementById("input2").addEventListener("input", function () {
  if (this.value === "") {
    this.classList.add("error");
  } else {
    this.classList.remove("error");
  }
});
