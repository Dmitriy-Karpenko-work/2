// Задание 1 (тайминг 25 минут)
// <div class="block">
// </div>
// 1 Дан блок, внутри него необходимо создать
// элемент div с классом item, разместить текст
// “Элемент внутри” и задать стили
// ● Цвет текста синий
// ● Рамка сплошная черная
// ● Цвет фона #f8f8f8
// ● Внутренний отступ 16px
// 1 Добавить данному блоку класс item_1
// (использовать setAttribute).

// const divEl = document.createElement("div");
// divEl.classList.add("item");
// divEl.innerHTML = "Элемент внутри";
// divEl.classList("item");

// const parentDivEl = document.querySelector("div.block");
// parentDivEl.appendChild(divEl);
// divEl.setAttribute("class", divEl.getAttribute("class") + " item_1"); //!!!!!!!!!!!!

// Задание 2 (тайминг 25 минут)
// 1 Дан код
// <div class="elem">
// <img src="photo.png" alt="photo">
// <div class="content">
// <h2 class="heading">Lorem, ipsum dolor.</h2>
// <p class="text">Lorem ipsum, dolor sit amet consectetur
// adipisicing elit. Recusandae, ea!</p>
// </div>
// </div>
// Необходимо с помощью querySelector найти параграф с
// классом text
// 2 Вывести в консоль соседний элемент h2
// 3 Вывести в консоль родительский элемент content
// 4 Вывести в консоль картинку
// 5 Вывести в консоль родительский элемент elem

// const textEl = document.querySelector("div.elem div.content p.text");
// console.log(textEl.innerHTML);
// console.log(textEl.previousElementSibling.innerHTML);
// console.log(textEl.parentElement.previousElementSibling);
// console.log(textEl.parentElement.parentElement);

// Задание 3 (тайминг 20 минут)
// <div class="item">
// <div class="elem">
// <div class="info">
// <h2 class="subtitle">Lorem, ipsum dolor.</h2>
// </div>
// </div>
// </div>
// // С помощью querySelector найти элемент h2 и вывести в
// // консоль всех его родителей

// const h2El = document.querySelector("h2.subtitle");
// let currentEl = h2El;
// while (currentEl.parentElement.tagName !== "BODY") {
//   console.log(currentEl.parentElement);
//   currentEl = currentEl.parentElement;
// }

//С помощью querySelector найти элемент h2  и вывести в консоль всех его родителей
// const h2El = document.querySelector("h2.subtitle");
// // let currentEl = h2El;
// // while (currentEl.parentElement.tagName !== "BODY") {
// //   console.log(currentEl.parentElement);
// //   currentEl = currentEl.parentElement;
// // }

// function findParents(element) {
//   console.log(element);
//   if (element.parentElement.tagName !== "BODY") {
//     findParents(element.parentElement);
//   }
// }
// findParents(h2El);

// 1 Дано поле ввода и кнопка отправить, необходим
// реализовать функционал, если пользователь нажимает на
// кнопку отправить, а поле ввода пустое, то под полем ввода
// и кнопкой должен появиться заголовок h2 с текстом вы не
// заполнили поле ввода
// 2 Цвет у рамки сделать красным

const btnEl = document.querySelector("form button.btn");
const inputEl = document.querySelector('form input[type="text"]');

btnEl.onclick = function (e) {
  if (!inputEl.value && !document.querySelector("form h2")) {
    const h2El = document.createElement("h2");
    h2El.innerHTML = "вы не заполнили поле ввода";

    btnEl.parentElement.appendChild(h2El);
  }
};
