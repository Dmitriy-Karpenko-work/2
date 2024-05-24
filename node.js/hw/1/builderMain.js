let countFirst = 0;
// const mainBody = document.body;
// const mainHead = document.querySelector("head");
document.head.insertAdjacentHTML(
  "beforeend",
  `
    <title>это главная страница</title>
    `
);

document.body.insertAdjacentHTML(
  "beforeend",
  `
  <h1>Главная страница</h1>
  <a href="/about">Переход на страницу About</a>
   <p>Количество посещений страницы ${countFirst}</p>
         
 
    `
);

function counter(n) {
  console.log(n);
  counter(n + 1);
}
counter(0);
//принудительно завершение выполнения скрипта через секунду
setTimeout(() => {
  console.log("скрипт успешно завершен");
  process.exit();
}, 1000);
