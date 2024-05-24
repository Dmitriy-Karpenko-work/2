"use strict";

// Задание 1:

// 1. Создайте массив с элементами 1, 2, 3.
// Выведите на экран каждый из этих элементов.

// const simpleArr = [1, 2, 3];

// console.log(simpleArr);
// console.log(simpleArr[0]);
// console.log(simpleArr[1]);
// console.log(simpleArr[2]);
// 2. Создайте массив с произвольными элементами.
// Выведите на экран количество элементов в этом массиве.
// const simpleArr = [1, "hi", true, "восемь"];
// console.log(simpleArr.length);
// 3. Создайте массив с элементами 'a', 'b', 'c'. Запишите вместо первого элемента
// число 1, вместо второго - 2, вместо третьего - 3.
// const simpleArr = ["a", "b", "c"];
// console.log(simpleArr);
// simpleArr[0] = 1;
// simpleArr[1] = 2;
// simpleArr[2] = 3;
// console.log(simpleArr);
// Тайминг: 20 минут.

// Задание 2:

// 1. Создайте массив с элементами 1, 2 и 3. С помощью оператора ++ увеличьте
// каждый элемент массива на единицу.

// const arrNum = [1, 2, 3];
// console.log(arrNum);
// // arrNum[0]++;
// // arrNum[1]++;
// // arrNum[2]++;
// // console.log(arrNum);

// for (let i = 0; i < arrNum.length; i++) {
//   arrNum[i]++;
// }
// console.log(arrNum);

// let a = 5;
// let b = a;
// console.log(a, b);

// 2. Узнайте длину следующего массива и объясните почему такое значение:
// ```
// const arr = [];
// arr[3] = "a";
// arr[8] = "b";
// console.log(arr);
// console.log(arr.length);
// console.log(arr[5]);
// ```
// 3. Пусть дан такой массив: `[1, 2, 3]`. Добавьте ему в конец элементы 4 и 5.
// 4. Создайте произвольный массив из 5 элементов, удалите из него два элемента.
// Проверьте, какое станет значение свойства length после этого.

// const arr = [1, "hi", true, 4, 5];
// console.log(arr.splice(2, 2));
// console.log(arr);

// const arr = [1, "hi", true, 4, 5];
// console.log(arr.splice(2, 2));
// console.log(arr.splice(2, 0, 500, 400));
// console.log(arr);

// Тайминг: 15 минут.

// Задание 3:

// 1. С помощью цикла for выведите в консоль числа от 11 до 33.

// for (let i = 11; i <= 33; i++) {
//   console.log(i);
// }
// 2. С помощью цикла for выведите в консоль нечетные числа в промежутке от 1
// до 100 включительно.

// for (let i = 1; i <= 100; i++) {
//   if (i % 2 !== 0) {
//     console.log(i);
//   }
// }

// for (let i = 1; i <= 100; i = i + 2) {
//   console.log(i);
// }
// 3. С помощью цикла for выведите в консоль числа от 100 до 0.
// for (let i = 100; i >= 0; i--) {
//   console.log(i);
// }
// 4. Создать переменную с заданным числом. Умножайте число на 3 столько раз,
// пока результат умножения не станет больше 1000. Какое число получится?
// Посчитайте количество итераций, необходимых для этого.
// let count = 0;
// let num = 2;
// while (num < 1000) {
//   num = num * 3;
//   count++;
//   console.log(count);
// }

// Тайминг: 25 минут.

// Задание 4:

// 1. Создать массив `[2, 5, 9, 15, 1, 4]`.
// Выведите в консоль те элементы массива, которые больше 3-х, но меньше 10.

// const numArr = [2, 5, 9, 15, 1, 4];
// for (let i = 0; i < numArr.length; i++) {
//   if (numArr[i] > 3 && numArr[i] < 10) {
//     console.log(numArr[i]);
//   }
// }

// numArr.forEach(function (num, i) {
//   if (num > 3 && num < 10) {
//     console.log(numArr[i]);
//   }
// });

// const filteredArr = numArr.filter(function (num) {
//   if (num > 3 && num < 10) {
//     return true;
//   }
//   return false;
// });
// console.log(filteredArr);

// const filteredArr = numArr.filter((num) => num > 3 && num < 10);
// console.log(filteredArr);

// 2. Найдите сумму четных чисел от 2 до 100.
// let sum = 0;
// for (let i = 2; i <= 100; i++) {
//   if (i % 2 === 0) {
//     sum += i;
//   }
// }
// console.log(sum);

// 3. Создать массив `[2, 5, 9, 3, 1, 4]`.

// const numArr = [2, 5, 9, 3, 1, 4];
// let sum = 0;
// for (let i = 0; i < numArr.length; i++) {
//   sum += numArr[i];
// }
// console.log(sum);
// Найдите сумму элементов этого массива.
// 4. С помощью цикла сформируйте строку '-1-2-3-4-5-6-7-8-9-'.

// let str = "-";
// for (let i = 1; i <= 9; i++) {
//   str += i + "-";
// }
// console.log(str);

// 5. Создать массив `[2, 5, 9, 0, 3, 1, 4]`.
// Запустите цикл, который будет по очереди выводить элементы этого массива в
// консоль до тех пор, пока не встретится элемент со значением 0. После этого
// цикл должен завершить свою работу.

// const numArr = [2, 5, 9, 0, 3, 1, 4];
// for (let i = 0; i < numArr.length; i++) {
//   if (numArr[i] === 0) {
//     break;
//   }
//   console.log(numArr[i]);
// }
// Тайминг: 25 минут.

// Задание 5:

// 1. Создать массив из 10 случайных чисел от 0 до 100 включительно.
// Наобходимо вывести в консоль все числа, которые делятся и на 2, и на 3.

// const numArr = [];
// for (let i = 1; i <= 10; i++) {
//   numArr.push(Math.trunc(Math.random() * 101));
// }
// console.log(numArr);
// for (let i = 0; i < numArr.length; i++) {
//   if (numArr[i] % 2 === 0 && numArr[i] % 3 === 0) {
//     console.log(numArr[i]);
//   }
// }
// 2. Дан массив: `[1, 2, 3, 2, 4, 3, 5, 6, 3, 2, 3]`. Подсчитайте количество
// цифр 3 в этом массиве.
// let result = 0;
// const numArr = [1, 2, 3, 2, 4, 3, 5, 6, 3, 2, 3];
// for (let i = 0; i < numArr.length; i++) {
//   if (numArr[i] === 3) {
//     result++;
//   }
// }
// console.log(result);

// 4. Дан массив: `[1, 2, 3, 4, 5]`.
// С помощью метода splice преобразуйте массив в следующий: [1, 4, 5]
const numArr = [1, 2, 3, 4, 5];
numArr.splice(1, 2);
console.log(numArr);
// Тайминг: 25 минут.
