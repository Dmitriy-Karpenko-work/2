const mainSecondBody = document.body;
const mainSecondheader = document.querySelector("head");

mainSecondheader.insertAdjacentHTML(
  "beforeend",
  `
    <title>Ваш заголовок здесь</title>
    `
);
mainSecondBody.insertAdjacentHTML(
  "beforeend",
  `
  
  <nav>
  <a href="./index.html">главная страница</a><a href="./2.html">вторая страница</a
  ><a href="./3.html">третья страница</a
  ><a href="./4.html">четвертая страница</a>
  </nav>
 
    `
);
