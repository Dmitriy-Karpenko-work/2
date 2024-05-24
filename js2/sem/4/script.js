// Задание 1 (тайминг 20 минут)
// 1 В html создать элемент checkbox и текст рядом с
// ним “Согласен с условиями”
// 2 Добавить кнопку отправить
// 3 При клике на кнопку отправить нужно проверять
// выбран ли активным элемент checkbox
// 4 Если элемент не выбран, добавить текст под
// чекбоксом “Необходимо согласиться с условиями”

// const divEl = document.querySelector("div.conteiner__form");
// const btnEl = divEl.querySelector("button.conteiner__btn");
// const checkboxEl = divEl.querySelector("input.conteiner__checkbox");

// btnEl.addEventListener("click", function (e) {
//   if (!checkboxEl.checked) {
//     const spanEl = document.createElement("span");
//     spanEl.innerHTML = "неоюходимо согласиться с условиями";
//     divEl.appendChild(spanEl);
//   }
// });

// const divEl = document.querySelector("div.conteinerRadio");
// const radioTeaEl = divEl.querySelector("input.conteinerRadio__tea");
// const radioCoffeEl = divEl.querySelector("input.conteinerRadio__coffe");
// const btnSubEl = divEl.querySelector("button.conteinerRadio__btn");
// btnSubEl.addEventListener("click", function (e) {
//   if (radioCoffeEl.checked) {
//     console.log("кофе закончился");
//   } else if (radioTeaEl.checked) console.log("чай закончился");
//   else {
//     console.log("ничего не выбрано");
//   }
// });

btnEl.addEventListener("click", function (e) {
  if (inputEl.value === password) {
    inputEl.classList.remove("brdRed");
    inputEl.classList.add("brdGreen");
  } else {
    inputEl.classList.remove("brdGreen");
    inputEl.classList.add("brdRed");
  }
});
