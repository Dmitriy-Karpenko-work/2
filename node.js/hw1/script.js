const http = require("http");

//счетчик переходов на главную
let countFirst = 0;
//счетчик переходов на вторую страницу
let countSecond = 0;
const server = http.createServer((req, res) => {
  if (req.url === "/") {
    res.writeHead(200, {
      "Content-Type": "text/html; charset=UTF-8",
    });
    countFirst++;
    res.end(`${pathToFileURL("./builderMain.js")}`);
  } else if (req.url === "/about") {
    res.writeHead(200, {
      "Content-Type": "text/html; charset=UTF-8",
    });
    countSecond++;
    res.end(
      `<h1>Страница About</h1>
         <a href="/">Переход на страницу Главная</a>
         <p>Количество посещений страницы ${countSecond}</p>
         `
    );
  } else {
    res.writeHead(404, {
      "Content-Type": "text/html; charset=UTF-8",
    });
    res.end(
      `<h1>Ошибка 404</h1>
         <p>Страница не существует</p>
         `
    );
  }
});

server.listen("30000");
