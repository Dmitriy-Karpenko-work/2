"use strict";

/*
Создать переменные positive и negative, в которые пользователь вводит с 
клавиатуры значения. Нужно попросить пользователя ввести положительное число в 
переменную positive и отрицательное в переменную negative. 
Перед тем, как положить значения в данные переменные необходимо их превратить 
в числа.
После ввода значений, необходимо вывести "Все значения верные.", если 
пользователь действительно ввел корректные значения, которые мы просили его 
ввести.
Если же пользователь где-то ввел неверное значение, то необходимо вывести 
в консоль "Одно или более значений некорректно.".
*/
let positive = null;
let negative = null;

const userInputPositive = prompt(`введите положительное число число `);
if (userInputPositive === null) {
  alert(`так как число не введено ему присвоено значение null`);
}
const userInputNegative = prompt(`введите отрицательное число `);
if (userInputNegative === null) {
  alert(`так как число не введено ему присвоено значение null`);
}

if ((userInputPositive > 0, userInputNegative < 0)) {
  positive = userInputPositive;
  negative = userInputNegative;
  alert(`Все значения верные.`);
} else {
  alert(`Одно или более значений некорректно.`);
}

console.log(userInputPositive, userInputNegative);
alert(`положительное число ${positive},отрицательное число ${negative}`);
