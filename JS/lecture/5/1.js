"use strict";
// Задание 1:

// 1. Создайте объект с ключами от 1 до 7, в качестве значений содержащий имена
// дней недели. Выведите на экран “Вторник”.
// const week = {
//   1: "понедельник",
//   2: "вторник",
//   3: "среда",
//   4: "четверг",
//   5: "пятница",
//   6: "суббота",
//   7: "восскресенье",
// };
// console.log(week[2]);
// 2. Создайте объект user с ключами 'name', 'surname', 'age'. Выведите в консоль
// фамилию, имя и возраст одной строкой.
// const user = {
//   name: "Дмитрий",
//   surname: "Карпенко",
//   age: "27",
// };
// console.log(`имя: ${user.name} фамилия: ${user.surname}  возраст: ${user.age}`);
// 3. Добавьте в объект user свойство отчество, которое пользователь должен
// ввести с клавиатуры.
// const user = {
//   name: "Дмитрий",
//   surname: "Карпенко",
//   age: "27",
// };
// console.log(`имя: ${user.name} фамилия: ${user.surname}  возраст: ${user.age}`);
// user.patronymic = prompt("Введите отчество");
// console.log(user);
// delete user.surname;
// console.log(user);
// 4. Удалите свойство surname.

// Тайминг: 20 минут.

// Задание 2:

// 1. Создайте два массива: первый с названиями дней недели, а второй - с их
// порядковыми номерами:

// const weekString = ["пн", "вт", "ср", "чт", "пт", "сб", "вс"];
// const weekNumber = [1, 2, 3, 4, 5, 6, 7];
// const week = {};
// for (let i = 0; i < 7; i++) {
//   week[weekString[i]] = weekNumber[i];
//   console.log(weekString[i], weekNumber[i]);
// }
// console.log(week);

// `['пн', 'вт', 'ср', 'чт', 'пт', 'сб', 'вс']`
// `[1, 2, 3, 4, 5, 6, 7]`
// 2. С помощью цикла создайте объект, ключами которого будут названия дней,
// а значениями - их номера.
// 3. Создайте объект: `{x: 1, y: 2, z: 3}`. Переберите этот объект циклом и
// возведите каждый элемент этого объекта в квадрат.

// const object = {
//   x: 1,
//   y: 2,
//   z: 3,
// };
// console.log(object);
// for (const key in object) {
//   object[key] = object[key] * object[key];
// }
// console.log(object);
// Тайминг: 25 минут.

// Задание 3:

// ```
// const obj = {
//   key1: {
//     key1: 1,
//     key2: 2,
//     key3: 3,
//   },
//   key2: {
//     key1: 4,
//     key2: 5,
//     key3: 6,
//   },
//   key3: {
//     key1: 7,
//     key2: 8,
//     key3: 9,
//   },
// }
// ```

// Найдите сумму всех чисел, приведенного объекта.

// Тайминг: 20 минут.

// const obj = {
//   iodsuf: {
//     asd: 1,
//     zxc: {
//       khvxc: {
//         ncxvm: 9,
//       },
//     },
//     qwd: 3,
//   },
//   gerg: {
//     joij: {
//       shdjk: 100,
//     },
//     kjn: 5,
//     iyu: 6,
//   },
//   xcnkv: {
//     oirje: 7,
//     iuhdv: 8,
//   },
//   idb: 1000,
// };
// let sum = 0;

// function getSum(obj) {
//   let curr = 0;
//   for (const key in obj) {
//     if (typeof obj[key] === "number") {
//       curr += obj[key];
//     } else {
//       curr += getSum(obj[key]);
//     }
//   }
//   return curr;
// }

// getSum(obj);
// console.log(getSum(obj));

// Задание 4:

// 1. Создайте объект riddle.
// const riddle = {};
// 2. Добавьте свойства question со значениями(текст загадки) и
// answer (ответ на загадку).
// const riddle = {
//   question: "текст загадки",
//   answer: "ответ на загадку",
// };
// 3. Создайте метод askQuestion который спрашивает у пользователя вопрос
// question и сравнивает ответ с answer.

const riddle = {
  question: "Зимой и летой одним цветом",
  answer: ["ёлка", "ель", "елка"],
  askQ() {
    const userAnswer = prompt(`${this.question} введите ответ на загадку`);
    let flag = false;
    for (let i = 0; i < this.answer.length; i++) {
      if (userAnswer.toLocaleLowerCase() === this.answer[i]) {
        alert("поздравляем!");
        flag = true;
      }
    }
    if (flag === false) {
      alert("увы ответ неверен");
    }
  },
};
riddle.askQ();

// В случае верного ответа, необходимо поздравить пользователя.
// В случае, если пользователь ответил неверно, необходимо подсказать,
// подсказок может быть несколько.
// Если пользователь ответил неверно после всех подсказок, то в консоль
// выводится текст: “вы проиграли”.

// Тайминг: 25 минут.
