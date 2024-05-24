// Задание 1:

// 1. Написать функцию, которая принимает, имя, фамилия и возраст. Функция должна
// вывести в консоль строку:
// "Привет, `имя` `фамилия`. Вы уже большой, вам `возраст`."

// function userInfo(name, surname, age) {
//   console.log(`Привет, ${name} ${surname}. Вы уже большой, вам ${age}.`);
// }
// userInfo("Иван", "Иванович", "27");

// 2. Создайте функцию, которая принимает число, а возвращает квадрат переданного
// ей числа.

//  function makeSquare(number) {
//    return number ** 2;
//  }
//  console.log(makeSquare(2));

// 3. Создайте функцию, которая принимает число.
// Функция должна вывести в консоль '+++', если число положительное, либо '---',
// если число было отрицательное. В случае, если было передано не число, либо ноль,
// функция ничего не должна выводить.

// function numInfo(num) {
//   if (typeof num !== "num") return;
//   {
//     if (num > 0) {
//       alert("+++");
//     } else if (0 > num) {
//       alert("---");
//     } else if (num === 0) {
//       alert("неверное значение");
//     }
//   }
// }
// numInfo(1);

// Тайминг: 20 минут.

// Задание 2:
// 1. Создайте функцию, которая параметрами принимает 3 числа и выводит в
// консоль сумму этих чисел.
// Создайте три переменные, со случайными значениями и продемонстрируйте работу
// данной функции.

// const sumNums = (a, b, c) => console.log(a + b + c);

// const num1 = Math.trunc(Math.random() * 10);
// const num2 = Math.trunc(Math.random() * 10);
// const num3 = Math.trunc(Math.random() * 10);

// sumNums(num1, num2, num3);

// 3. Дан код:

// func(2);
// func(3);
// func();

// function func(num = 5) {
//   console.log(num * num);
// }

// Расскажите, каким будет результат каждого из вызовов функции.

// Тайминг: 20 минут.

// Задание 3:

// 1. Создайте функцию, которая принимает число, а возвращает квадратный корень
// переданного числа.
// С помощью созданной функции найдите сумму корней чисел 3 и 4 и выведите данную
// сумму в консоль.

// const num = 3;
// const num2 = 4;

// const root1 = (num) => Math.sqrt(num);
// console.log(root1(num) + root1(num2));
// const root2 = (num) => {
//   return Math.sqrt(num);
// };
// console.log(root2(num) + root2(num2));
// 2. Создайте функцию, которая находит минимальное число из 2х переданных
// аргументов функции и вернет найденное значение.

// const num1 = 5;
// const num2 = 3;

// const funcMin = (a, b) => Math.min(a, b);
// console.log(funcMin(num1, num2));
// Тайминг: 20 минут.

// Задание 4:

// 1. Создайте функцию, которая принимает параметром число от 1 до 7, а возвращает
// день недели на русском языке.

// const numberInput = Number(prompt("Введите число от 1 до 7"));
// function dayWeek(num) {
//   switch (num) {
//     case 1:
//       return "понедельник";
//     case 2:
//       return "вторник";
//     case 3:
//       return "среда";
//     case 4:
//       return "четверг";
//     case 5:
//       return "пятница";
//     case 6:
//       return "суббота";
//     case 7:
//       return "воскресенье";
//     default:
//       return "неверное число";
//   }
// }
// console.log(dayWeek(numberInput));

// const numberInput = Number(prompt("Введите число от 1 до 7"));
// function dayWeek(num) {
//   switch (num) {
//     case 1:
//       console.log("понедельник");
//       break;
//     case 2:
//       console.log("второник");
//       break;
//     case 3:
//       console.log("среда");
//       break;
//     case 4:
//       console.log("четверг");
//       break;
//     case 5:
//       console.log("пятница");
//       break;
//     case 6:
//       console.log("суббота");
//       break;
//     case 7:
//       console.log("воскресенье");
//       break;
//     default:
//       console.log("неверное число");
//   }
// }

// 2. Создайте функцию, которой мы передаем имя и она возвращает приветствие в
// зависимости от времени суток (утро, день, вечер, ночь), например:
// "Добрый день, Иван." или "Доброй ночи, Иван.".

// const userInputName = String(prompt("Введите имя"));

// function sayHello(name) {
//   const time = new Date();
//   const hour = time.getHours();
//   if (hour < 6) {
//     return `доброй ночи ${name}`;
//   }
//   if (hour < 12) {
//     return `доброe утро ${name}`;
//   }
//   if (hour < 18) {
//     return `добрый день ${name}`;
//   } else {
//     return `добрый вечер ${name}`;
//   }
// }
// console.log(sayHello(userInputName));

// Тайминг: 30 минут.

// let a = 500;
// let funk = (num) => a * 0.75;

// console.log(funk(a));

// /**
//  * функция возвращает приветствие
//  * @param {string} name - имя пользователя
//  * @param {string} surmane - фамилия пользователя
//  * @param {number} age -возраст вользователя
//  * @returns {String} - строка с приветсвтвиям
//  */

// function userInfo(name, surmane, age) {
//   return console.log(`привет ${name}${surmane} вам ${age}`);
// }
