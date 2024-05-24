"use strict";
``;

document.addEventListener("DOMContentLoaded", function (e) {
  console.log("все теги прогрузились");
  console.log("первое задание выполнено");
  console.log("-------------------------------------------");
});

window.addEventListener("load", function (e) {
  console.log("страница загрузилась");
  console.log("второе задание выполнено()");
  console.log("-------------------------------------------");
});

document.addEventListener("click", (e) => {
  const containStr = e.target.classList.contains("super_element")
    ? "присутствует"
    : "отсутствует";
  console.log(`
  Класс "super_element" ${containStr} в элементе 
  "${e.target.tagName.toLowerCase()}".`);
  console.log(
    "можно при клике по элементу страние мы  проверяем есть ли в этом теге "
  );
  console.log("третье задание выполнено()");
  console.log("-------------------------------------------");
});

// 4. Сделайте, чтобы при наведении на textarea в
//  консоли появлялось сообщение: "Вы навели на textarea."

document.querySelector("textarea").addEventListener("mouseover", function (e) {
  console.log("Вы навели на textarea.");
  console.log("четвертое  задание выполнено()");
  console.log("-------------------------------------------");
});

// 5. Необходимо повесить событие клика на тег ul.
//  В обработчике события в консоль необходимо выводить текст,
//   который записан внутри элемента кнопки, по которой был произведен клик.
//   Если клик был не по кнопке, то ничего выводить не нужно. Необходимо использовать делегирование.

const ulEl = document.querySelector("ul");
ulEl.addEventListener("click", function (e) {
  if (e.target.tagName == "BUTTON") console.log(e.target.textContent);
});

// 6. Вопрос: Почему в console.log
// пишется сначала текст из 5 задания и только потом выводится текст из 3 задания,
//  если мы кликаем по кнопкам в ul? Ответ необходимо написать здесь же, под этим
//   комментарием, своими словами.

// потому что в третьем задании мы повесили document.addEventListener("click") на весь документ
// гду бы мы не кликнули в документу будет запускаться скрипт проверки
//

// 7. С помощью JS необходимо изменить цвет заднего фона каждого второго тега li.

const colorBackGraundLI = document.querySelectorAll("ul li");
for (let i = 1; i < colorBackGraundLI.length; i += 2) {
  colorBackGraundLI[i].style.backgroundColor = "red";
}
//
