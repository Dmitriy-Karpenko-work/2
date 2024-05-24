// Задание 1 (тайминг 15 минут)
// 1 В html создать кнопку button
// 2 После загрузки страницы вывести в консоль текст
// “страница загрузилась”
// 3 Добавить событие onclick которое выводит в
// консоль текст “событие onclick”
// 4 Добавить событие addEventListener которое
// выводит в консоль текст “событие
// addEventListener”
// const fundBtn = document.querySelector("button.btn");

// window.addEventListener("load", function (e) {
//   console.log("страница загрузилась");
// });
// fundBtn.addEventListener("click", function (e) {
//   console.log("событие onclick");
// });

// Задание 2 (тайминг 30 минут)
// 1 Создать в html три кнопки button с нумерацией (1, 2, 3
// соответственно)
// 2 Добавить клик на кнопку , чтобы в консоль выводилась
// именно та кнопка на которую мы нажали
// 3 Добавить кнопку button с текстом 4, которая считает
// сколько раз на нее нажали и количество нажатий на эту
// кнопку выводит в консоль
// 4 Создать кнопку button с текстом 5, При клике на которую,
// меняется текст данной кнопки на “Вы нажали на эту
// кнопку”

//  const buttonContainer = document.querySelector("div.container");
// const btn1 = document.createElement("button");
// btn1.innerHTML = "кнопка1";

// const btn2 = document.createElement("button");
// btn2.innerHTML = "кнопка2";
// const btn3 = document.createElement("button");
// btn3.innerHTML = "кнопка3";

// const btn4 = document.createElement("button");
// btn4.innerHTML = "кнопка4";

// const btn5 = document.createElement("button");
// btn5.innerHTML = "кнопка5";

// buttonContainer.appendChild(btn1);
// buttonContainer.appendChild(btn2);
// buttonContainer.appendChild(btn3);
// buttonContainer.appendChild(btn4);
// buttonContainer.appendChild(btn5);

// const clickBtn = function (e) {
//   console.log(e.target.innerHTML);
// };
// btn1.addEventListener("click", clickBtn);
// btn2.addEventListener("click", clickBtn);
// btn3.addEventListener("click", clickBtn);

// let count = 0;
// btn4.addEventListener("click", function (e) {
//   count++;
//   console.log(count);
// });

// btn5.addEventListener("click", function (e) {
//   e.target.innerHTML = "Вы нажали на эту кнопку";
// });

// Задание 3 (тайминг 30 минут)
// 1 Создать кнопку, которая добавляем заголовок h1 с текстом,
// “Новый заголовок, данный элемент нужно расположить
// после кнопки
// 2 Создать вторую кнопку, которая будет удалять созданный
// заголовок h1
// 3 Создать третью кнопку, при наведении на которую в
// консоль будет выводиться текст “вы навели на данную
// кнопку” , как только вы убираем курсор мыши с кнопки, в
// консоли должен появиться текст “Наведения на кнопку
// больше нет”

// const buttonContainer = document.querySelector("div.container");
// const btn1 = document.createElement("button");
// btn1.innerHTML = "кнопка1";
// buttonContainer.appendChild(btn1);

// btn1.addEventListener("click", function (e) {
//   const h1Text = document.createElement("h1");
//   h1Text.innerHTML = "Новый заголовок";
//   buttonContainer.appendChild(h1Text);
// });

// const btn2 = document.createElement("button");
// btn2.innerHTML = "кнопка2";
// buttonContainer.appendChild(btn2);
// btn2.addEventListener("click", function (e) {
//   const h1Array = buttonContainer.querySelectorAll("h1");
//   h1Array.forEach(function (el) {
//     el.remove();
//   });
// });

// // 3 Создать третью кнопку, при наведении на которую в
// // консоль будет выводиться текст “вы навели на данную
// // кнопку” , как только вы убираем курсор мыши с кнопки, в
// // консоли должен появиться текст “Наведения на кнопку
// // больше нет”

// const btn3 = document.createElement("button");
// btn3.innerHTML = "кнопка3";
// buttonContainer.appendChild(btn3);

// btn3.addEventListener("mouseover", function (e) {
//   console.log("вы навели на данную кнопку");
// });
// btn3.addEventListener("mouseleave", function (e) {
//   console.log("Наведения на кнопку  больше нет");
// });

// Задание 4 (тайминг 30 минут)
// 1 Создать в html список состоящий из 3-х произвольных
// элементов li
// 2 Нужно создать кнопку которая будет добавлять элементы
// списка с текстом “новый элемент списка”
// 3 Создать кнопку, которая будет удалять первый элемент из
// созданного списка
// 4 Создать кнопку, при клике на которую ей добавляется класс
// “click”

const buttonContainer = document.querySelector("div.container");

const btn1 = document.createElement("button");
btn1.innerHTML = "создать ещё один елемент";
buttonContainer.appendChild(btn1);

const ulEl = buttonContainer.querySelector("ul");
btn1.addEventListener("click", function (e) {
  const liEl = document.createElement("li");
  liEl.innerHTML = "новый элемент списка" + Math.random(1, 11);
  ulEl.appendChild(liEl);
});

const btn2 = document.createElement("button");
btn2.innerHTML = "кнопка 2";
buttonContainer.appendChild(btn2);
btn2.addEventListener("click", function (e) {
  const liArray = ulEl.querySelectorAll("li");
  if (liArray.length > 0) {
    liArray[0].remove();
  }
});

const btn3 = document.createElement("button");
btn3.innerHTML = "кнопка 3";
buttonContainer.appendChild(btn3);
btn3.addEventListener("click", function (e) {
  e.target.setAttribute("class", "click");
});
