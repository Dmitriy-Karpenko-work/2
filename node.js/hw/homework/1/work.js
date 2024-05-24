function counter() {
  let n = 0;
  let start = Date.now();

  const timeStart = new Date(start).toISOString();

  while (Date.now() - start < 1000) {
    console.log(n);
    n++;
  }
  console.log(`Начало выполнения:   ${timeStart}`);
  console.log(`Конец выполнения:   ${new Date().toISOString()}`);
  console.log("Скрипт успешно завершен!");
}

counter();

// function counter(n) {
//   console.log(n);
//   setTimeout(() => counter(n + 1), 0);
// }
// counter(0);

//принудительно завершение выполнения скрипта через секунду
setTimeout(() => {
  console.log("скрипт успешно завершен");
  process.exit();
}, 1000);
