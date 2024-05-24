document
  .querySelector(".conteinerTime__btn")
  .addEventListener("click", function (e) {
    const timeWindow = document.querySelector(".conteinerTime__timeWindow");
    timeWindow.classList.toggle("conteinerTime__timeWindow--show"); // Используем toggle для добавления/удаления класса
  });

const timeNowDiv = document.querySelector(".conteinerTime__timeWindow");
const timeNow = setInterval(printTime, 1000);

function printTime() {
  let nowTime = new Date();

  let hours = nowTime.getHours();
  let minutes = nowTime.getMinutes();
  let seconds = nowTime.getSeconds();

  let timeString =
    hours +
    ":" +
    (minutes < 10 ? "0" : "") +
    minutes +
    ":" +
    (seconds < 10 ? "0" : "") +
    seconds;

  timeNowDiv.innerHTML = "Текущее время: " + timeString;
  console.log(nowTime);
}

// const checkbox = document.querySelector("input[type=checkbox]");
// checkbox.addEventListener("click", (event) => {
//   console.log(event.target.checked); // true
//   event.preventDefault();
// });

// const ulEl = "1";
// console.log(ulEl);
