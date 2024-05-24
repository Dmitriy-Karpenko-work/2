// Задание 1 (тайминг 20 минут)
// 1. Создайте функцию mergeArrays, которая принимает два
// массива и возвращает новый массив, содержащий все
// элементы из обоих массивов. Используйте spread
// оператор для объединения массивов.
// mergeArrays([1, 2, 3], [4, 5, 6]); // Ожидаемый результат: [1,
// 2, 3, 4, 5, 6]
// 2. Создайте функцию removeDuplicates, которая принимает
// любое количество аргументов и возвращает новый
// массив, содержащий только уникальные значения.
// Используйте rest оператор для сбора всех аргументов в
// массив а затем filter для определения дубликатов.
// removeDuplicates(1, 2, 3, 2, 4, 1, 5); // Ожидаемый
// результат: [1, 2, 3, 4, 5]

// const mergeArrays = (arrOne, arrTwo) => [...arrOne, ...arrTwo];
// // console.log(mergeArrays([1, 2, 3], [4, 5, 6]));

// function removeDuplicates(...params) {
//   return params.filter((elem, id) => {
//     return params.indexOf(elem) === id;
//   });
// }

// function removeDuplicates2(...arrays) {
//   const unecArray = [...new Set(arrays)];
//   return unecArray;
// }

// console.log(removeDuplicates(1, 2, 3, 2, 4, 1, 5));
// console.log(removeDuplicates2(1, 2, 5, 2, 4, 1, 3));
//-----------------------------------
// Задание 2 (Чистые функции 25минут)
// Текст задания
// 1. Напишите функцию getEvenNumbers, которая принимает массив
// чисел в качестве аргумента и возвращает новый массив,
// содержащий только четные числа.
// 2. Задача: Напишите функцию calculateAverage, которая принимает
// массив чисел в качестве аргумента и возвращает среднее значение
// этих чисел.
// 3. Напишите функцию capitalizeFirstLetter, которая принимает строку в
// качестве аргумента и возвращает новую строку, в которой первая
// буква каждого слова является заглавной.

// function getEvenNumbers(arrays) {
//   return arrays.filter((elem) => {
//     return elem % 2 === 0;
//   });
// }

// const getEvenNumbers2 = (arrays) => arrays.filter((elem) => elem % 2 === 0);

// console.log(getEvenNumbers([1, 2, 3, 2, 4, 1, 5]));
// console.log(getEvenNumbers2([1, 2, 3, 2, 4, 1, 5]));

// function calculateAverage(array) {
//   return array.reduce((sum, elem) => sum + elem) / array.length;
// }

// console.log(calculateAverage([1, 2, 3, 4, 5, 6]));

// function capitalizeFirstLetter() {
//   return str.replace(/\b\w/g, (char) => {
//     return char.toUpperCase();
//   });
// }

// function capitalizeFirstLetter(str) {
//   return str.replace(/(^|\s)\S/g, (char) => {
//     char.toUpperCase();
//   });
// }

// function capitalizeFirstLetter(str) {
//   return str.replace(/\b\w/g, function (char) {
//     return char.toUpperCase();
//   });
// }

// let str = "напишите функцию capitalizeFirstLetter";
// let result = capitalizeFirstLetter(str);
// console.log(result);

// Задание 3 (Замыкания 20 минут)
// 1. Напишите функцию createCalculator, которая принимает начальное
// значение и возвращает объект с двумя методами: add и subtract.
// Метод add должен увеличивать значение на переданное число, а
// метод subtract должен уменьшать значение на переданное число.
// Значение должно быть доступно только через методы объекта, а не
// напрямую.

// function createCalculator(def) {
//   return {
//     value: def,
//     add(num) {
//       return (this.value += num);
//     },
//     subtract(num) {
//       return (this.value -= num);
//     },
//   };
// }

// const numberResult = createCalculator(10);

// console.log(numberResult.add(5));
// console.log(numberResult.subtract(2));

// Напишите функцию createGreeting, которая принимает имя
// пользователя и возвращает функцию, которая будет выводить
// приветствие с использованием этого имени.
// // Пример использования:
// const greeting = createGreeting('John');
// greeting(); // Ожидаемый результат: "Hello, John!"

// function createGreeting(name) {
//   return function () {
//     return `hello ${name}!`;
//   };
// } // Ожидаемый результат: "Hello, John

// const greeting = createGreeting("John");
// console.log(greeting());

// Задача: Напишите функцию createPasswordChecker, которая
// принимает допустимую длину пароля в качестве аргумента и
// возвращает функцию для проверки введенного пароля.
// Возвращаемая функция должна принимать пароль и возвращать
// true, если его длина соответствует допустимой, и false в противном
// случае.
// // Пример использования:
// const isPasswordValid = createPasswordChecker(8);
// console.log(isPasswordValid('password')); // Ожидаемый результат:
// false
// console.log(isPasswordValid('secret')); // Ожидаемый результат: true

// function createPasswordChecker(passLength) {
//   return function (password) {
//     if (password.length > passLength) {
//       return true;
//     } else return false;
//     //return password.length < passLength;
//   };
// }
// const isPasswordValid = createPasswordChecker(8);
// console.log(isPasswordValid("password1")); // Ожидаемый результат: true
// console.log(isPasswordValid("secret")); // Ожидаемый результат: false

// Напишите рекурсивную функцию sumDigits, которая принимает
// положительное целое число в качестве аргумента и возвращает
// сумму его цифр.
// // Пример использования:
// console.log(sumDigits(123)); // Ожидаемый результат: 6 (1 + 2 + 3)
// console.log(sumDigits(456789)); // Ожидаемый результат: 39 (4 + 5 + 6
// + 7 + 8 + 9)
// ChatGPT
// Конечно, вот рекурсивная функция sumDigits, которая выполняет необходимую операцию:

function sumDigits(number) {
  // Базовый случай: если число состоит из одной цифры, возвращаем его
  if (number < 10) {
    return number;
  }
  // Рекурсивный случай: добавляем крайнюю правую цифру и вызываем функцию для остатка числа
  return (number % 10) + sumDigits(Math.floor(number / 10));
}

// Пример использования:
console.log(sumDigits(123)); // Ожидаемый результат: 6 (1 + 2 + 3)
console.log(sumDigits(456789)); // Ожидаемый результат: 39 (4 + 5 + 6 + 7 + 8 + 9)
// Эта функция работает следующим образом:

// Если число меньше 10 (т.е., состоит из одной цифры), оно сразу возвращается.
// В противном случае, мы берем последнюю цифру числа (number % 10)
// и добавляем ее к сумме остальных цифр. Для этого мы
// вызываем sumDigits для числа без последней цифры (Math.floor(number / 10)).
