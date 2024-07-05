// Задание 1.
// 1. Необходимо выводить на страницу текущую ширину
// и высоту окна браузера, при изменении значений, вывод
// также должен меняться.

// const widthBom = window.innerWidth;
// const heightBom = window.innerHeight;

// const resaultEl = document.querySelector(".widht-height");
// resaultEl.innerHTML = `ширина:${widthBom} высота:${heightBom}`;

// window.addEventListener("resize", () => {
//   resaultEl.innerHTML = `ширина:${window.innerWidth} высота:${window.innerHeight}`;
// });

// console.log(document.documentElement.clientWidth);
// console.log(document.documentElement.clientHeight);

// Задание 2
// Даны html и css:
// <style>
//   .box {
//     width: 100px;
//     height: 100px;
//     background-color: lightblue;
//     margin: 10px;
//     display: inline-block;
//   }
// </style>

// <button id="addButton">Добавить элемент</button>
// <button id="removeButton">Удалить элемент</button>
// <button id="cloneButton">Клонировать элемент</button>
// <div id="container">
//   <div class="box">1</div>
//   <div class="box">2</div>
//   <div class="box">3</div>
// </div>

// Необходимо создать страницу, в которой будут работать
// все три кнопки.
// - При нажатии на кнопку "Добавить элемент" на страницу
// добавляется новый квадратный элемент (<div>) с размерами
// 100x100 пикселей. Этот элемент должен иметь класс .box
// и содержать текст, указывающий порядковый номер элемента
// (1, 2, 3 и так далее).

// const addButtonEl = document.querySelector("#addButton");

// const containerEl = document.querySelector("#container");

// addButtonEl.addEventListener("click", () => {
//   const boxsEl = containerEl.querySelectorAll(".box").length;
//   containerEl.insertAdjacentHTML(
//     "beforeend",
//     `<div class="box">${boxsEl + 1}</div>`
//   );
// });

// // - При нажатии на кнопку "Удалить элемент" удаляется
// // последний добавленный элемент, если таковой имеется.

// const removeButtonEl = document.querySelector("#removeButton");
// removeButtonEl.addEventListener("click", () => {
//   containerEl.lastElementChild?.remove();
// });

// // - При нажатии на кнопку "Клонировать элемент" создается
// // копия последнего добавленного элемента и добавляется на
// // страницу. Если последнего добавленного элемента нет на
// // странице, необходимо вывести сообщение в alert, с надписью
// // о невозможности клонирования, так как клонировать нечего.

// const cloneButtonEl = document.querySelector("#cloneButton");

// cloneButtonEl.addEventListener("click", () => {
//   const cloneEl = containerEl.lastElementChild?.cloneNode(true);
//   if (cloneEl) {
//     containerEl.appendChild(cloneEl);
//   } else {
//     alert("!!!");
//   }
// });

// Задание 3.
// Необходимо создать страницу со списком статей.
// Каждая статья состоит из id, заголовка, текста статьи.
// id - будем брать из unix timestamp.
// Необходимо подготовить список статей в JSON-формате,
// которые будут выводиться на странице при первом ее
// открытии.
// Необходимо реализовать возможность удаления статьи.
// Необходимо реализовать возможность добавления статьи.
// Необходимо реализовать возможность изменения статьи,
// ввод данных можно реализовать через prompt.
// Статьи должны сохраняться в локальное хранилище
// браузера, и должны быть доступны после перезагрузки
// страницы.

const bdJson = `[
  {
    "id": 1718993473586,
    "title": "заголовок1",
    "text": "text1"
  },
  {
    "id": 1718993473587,
    "title": "заголовок2",
    "text": "text2"
  }
]`;

const key = "articles";

const containerArticleEl = document.querySelector(".containerArticle");

if (!localStorage.getItem(key)) {
  localStorage.setItem(key, bdJson);
}
const articles = JSON.parse(localStorage.getItem(key));
//~~~~~~~~~~~~~~вариант 1
// articles.forEach((element) => {
//   containerArticleEl.insertAdjacentHTML(
//     `beforeend`,
//     createArticleHtml(element)
//   );
// });
//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
//вариант 2
containerArticleEl.innerHTML = articles
  .map((element) => createArticleHtml(element))
  .join("");
//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
//------------------------удаление статьи--------------------
containerArticleEl.addEventListener("click", (event) => {
  //!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
  if (!event.target.classList.contains("removeArticle")) {
    return;
  }
  const articleEl = event.target.closest(".article");
  removeArticle(+articleEl.getAttribute("data-id"));

  articleEl.remove();
});
//***функция работы со local storage***/
function removeArticle(articleId) {
  const articles = JSON.parse(localStorage.getItem(key));
  const articleIndex = articles.findIndex(
    (article) => article.id === articleId
  );
  articles.splice(articleIndex, 1);
  localStorage.setItem(key, JSON.stringify(articles));
}

//=================================================================
//------------------------добавление статьи--------------------------
const addNewArticleEl = document.querySelector(".addNewArticle");
addNewArticleEl.addEventListener("click", () => {
  const article = {
    //~~~~~~~ вариант 1~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
    //const id = Date.now();
    // const title = prompt("Введите заголовок");
    //const text = prompt("Введите текст");
    //~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
    id: Date.now(),
    title: prompt("Введите заголовок"),
    text: prompt("Введите текст"),
  };
  articles.push(article);
  saveArticlesToLocalStorage(key, articles);
  containerArticleEl.insertAdjacentHTML(
    `beforeend`,
    createArticleHtml(article)
  );
});
//***функция работы со local storage***/
function saveArticlesToLocalStorage(key, articles) {
  localStorage.setItem(key, JSON.stringify(articles));
}
//=================================================================
//------------------------редактирование статьи--------------------
containerArticleEl.addEventListener("click", (event) => {
  if (!event.target.classList.contains("updateArticle")) {
    return;
  }
  const articleEl = event.target.closest(".article");
  const article = articles.find(
    (article) => article.id === +articleEl.getAttribute("data-id")
  );

  article.title = prompt("Введите заголовок");
  article.text = prompt("Введите текст");

  saveArticlesToLocalStorage("articles", articles);

  articleEl.querySelector(".title").innerHTML = article.title;
  articleEl.querySelector(".text").innerHTML = article.text;
});

//***функция работы со local storage***/
function saveArticlesToLocalStorage(key, articles) {
  localStorage.setItem(key, JSON.stringify(articles));
}

//=================================================================
function createArticleHtml(article) {
  return `<div class="article" data-id="${article.id}">
          <div class="title">${article.title}</div>
          <div class="text">${article.text}</div>
          <button class="removeArticle">Удалить</button>
          <button class="updateArticle">редактировать</button>
        </div>
        `;
}
