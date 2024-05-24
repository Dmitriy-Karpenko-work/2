"use strict";
``;

// []()
// []()
console.log(`--------------------------`);
// 1. Найти по id, используя getElementById, элемент с id равным "super_link" и вывести этот элемент в консоль.
const findElem = document.getElementById("super_link");
console.log(findElem);
console.log(`первое задание выполнено`);
// []()
// 2. Внутри всех элементов на странице, которые имеют класс "card-link", поменяйте текст внутри элемента на "ссылка".
// []()

console.log(`--------------------------`);

const findElemSecond = document.querySelectorAll(".card-link");
findElemSecond.forEach((element) => {
  element.innerHTML = "ссылка";
});
console.log(`второе задание выполнено(текс поменялся в ссылках)`);
// 3. Найти все элементы на странице с классом "card-link", которые лежат в элементе с классом "card-body" и вывести полученную коллекцию в консоль.
console.log(`--------------------------`);

const findElemThird = document.querySelectorAll(".card-body .card-link");
console.log(findElemThird);
console.log(
  `третье задание выполнено(выведен в консоль массив из двух элементов)`
);
// []()
// 4. Найти первый попавшийся элемент на странице у которого есть атрибут data-number со значением 50 и вывести его в консоль.
// []()
console.log(`--------------------------`);
const findFourth = document.querySelector('[data-number="50"]');
console.log(findFourth);

console.log(
  `четвертое задание выполнено(выведен в консоль элемент у которого data-number="50")`
);
// 5. Выведите содержимое тега title в консоль.
// []()
console.log(`--------------------------`);
console.log(document.title);
console.log(` задание пятое выполнено(выведен в консоль title)`);
// 6. Получите элемент с классом "card-title" и выведите его родительский узел в консоль.
console.log(`--------------------------`);

const findSix = document.querySelector(".card-title").parentNode;
console.log(findSix);
console.log(` задание шестое выполнено(выведен в консоль родмтельский узел)`);
// []()
// 7. Создайте тег p`, запишите внутри него текст "Привет" и добавьте созданный тег в начало элемента, который имеет класс "card".
console.log(`--------------------------`);

const pTag = document.createElement("p");
pTag.textContent = "Привет";
document.querySelector(".card").prepend(pTag);
console.log(
  ` задание седьмое выполнено(создан тег и добавлен в начало тега card)`
);
/*
8. Удалите тег h6 на странице.
 */
console.log(`--------------------------`);
document.querySelector("h6").remove();
console.log(` задание восьмое выполнено ( тег "h6" удален)`);
