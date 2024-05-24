console.log(" ");
console.log("----------------------- задача 1 ----------------------");
console.log(" ");
//  Дан массив const arr = [1, 5, 7, 9] с помощью Math.min и
//  spread оператора, найти минимальное число в массиве, решение
//  задание должно состоять из одной строки

// мой вариант
// если условие не входит в решение то ответ выглядит так

const arr = [1, 5, 7, 9];
console.log(Math.min(...arr));

// вариант который подсказал мне gpt не универсально но подходит под решение "ОДНА СТРОКА"
// console.log(Math.min(...[1, 5, 7, 9]));

console.log(" ");
console.log("----------------------- задача 2 ----------------------");
console.log(" ");
// 2) Напишите функцию createCounter, которая создает счетчик и
// возвращает объект с двумя методами: increment и decrement.
//  Метод increment должен увеличивать значение счетчика на 1,
//   а метод decrement должен уменьшать значение счетчика на 1.
//    Значение счетчика должно быть доступно только через методы объекта, а не напрямую.

/**
 * Создает счетчик и возвращает объект с методами увеличения, уменьшения и получения текущего значения счетчика.
 * @returns {Object} Объект счетчика с методами увеличения, уменьшения и получения значения.
 */

function createCounter() {
  let count = 0; // создаём счеетчик

  // возвращаем объект с двумумя(третий сделал для нагядности) методами
  return {
    //функция  увеличиваем значение счетчика на 1
    increment: function () {
      count++;
    },
    //функция  уменьшаем значение счетчика на 1
    decrement: function () {
      count--;
    },
    //функция получения текущего значения
    getCount: function () {
      return count;
    },
  };
}

// Пример использования:
const counter = createCounter();

counter.increment(); // +1
counter.increment(); // +1
counter.increment(); // +1
counter.increment(); // +1
counter.increment(); // +1

console.log(`значение счетчика-1: ${counter.getCount()}`); // в консоль выведется 5
counter.decrement(); // и уменьшиться на 1
console.log(`значение счетчика-1: ${counter.getCount()}`); // в консоль выведется 4
console.log("создаём второй счетщик(необезательно но зато наглядно)");

const counter2 = createCounter();
console.log(`значение счетчика-2: ${counter2.getCount()}`); // в консоль выведется 0
counter2.decrement(); // и уменьшиться на 1
console.log(`значение счетчика-2: ${counter2.getCount()}`); // в консоль выведется -1
// у счетчик у каждой переменной свой "УНИКАЛЬНЫЙ"
console.log(" ");
console.log("----------------------- задача 3 ----------------------");
console.log(" ");
//------------------------------------------------------------------------------------------------
// 3) Напишите рекурсивную функцию findElementByClass, которая
//  принимает корневой элемент дерева DOM и название класса в
//  качестве аргументов и возвращает первый найденный элемент с
//  указанным классом в этом дереве.

// /**
//  * Рекурсивно ищет элемент по указанному классу в дереве DOM.
//  * @param {HTMLElement} root Корневой элемент, с которого начинается поиск.
//  * @param {string} className Имя класса, которое необходимо найти.
//  **/
// function findElementByClass(root, className) {
//   // Проверяем, есть ли у текущего элемента нужный класс
//   if (root.classList && root.classList.contains(className)) {
//     return root;
//   }

//   for (let i = 0; i < root.children.length; i++) {
//     const foundElement = findElementByClass(root.children[i], className);
//     if (foundElement) {
//       return foundElement;
//     }
//   }
//   return null;
// }

// const rootElement = document.querySelector(".main");
// const foundElement = findElementByClass(rootElement, "needFind");
// console.log(foundElement);

//---------------------------------------------------------------------------------------------------------
//версия 2 доработана с помощью gpt
// дабавлен вывод в консоль по какому пути найден нужный блок
//исправлена 'ошибка' возврата null

const rootElement = document.querySelector(".main");
const foundElement = findElementByClass(
  rootElement,
  "needFind",
  rootElement.tagName
);
console.log(foundElement);

/**
 * рекурсивную функцию ищет элемент по указанному классу в дереве DOM.
 * @param {HTMLElement} root Корневой элемент, с которого начинается поиск.
 * @param {string} className Имя класса, которое необходимо найти.
 **/
function findElementByClass(root, className, path = "") {
  let found = false;
  function search(root, path) {
    if (root.classList && root.classList.contains(className)) {
      found = true;
      console.log(`
          Элемент с классом '${className}' найден по пути:  ${path}
        `);
      return root;
    }
    for (let i = 0; i < root.children.length; i++) {
      const foundElement = search(
        root.children[i],
        path + " -> " + root.children[i].tagName
      );
      if (foundElement) {
        return foundElement;
      }
    }
  }
  const result = search(root, path);

  if (!found) {
    console.log(`Элемент с классом "${className}" не найден."`);
  }
  return result;
}
