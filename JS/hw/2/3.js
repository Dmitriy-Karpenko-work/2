"use strict";

/*
Необходимо создать переменную dayNumber, в которую пользователь должен ввести 
целое число в интервале [1, 32).
Если пользователь ввел иное значение, необходимо вывести в консоль 
"Неверное значение".
Если пользователь ввел верное значение, в нужном диапазоне, то необходимо 
определить, в какую декаду месяца попадает это число и вывести сообщение в 
консоль: "Число N1 попадает в N2 декаду месяца.", где вместо N1 и N2 будут 
подставлены подходящие значения, которые мы получили.

Примечание: выражение [1, 32) означает от 1 включительно, до 32, не включая 
число 32.
*/

const dayNumber = prompt("ввести целое число в интервале от 1 до 31");
if (dayNumber >= 32) {
  alert("Неверное значение");
}
if (dayNumber >= 0 && dayNumber <= 10) {
  alert(`Число ${dayNumber} попадает в 1 декаду месяца.`);
}

if (dayNumber >= 11 && dayNumber <= 20) {
  alert(`Число ${dayNumber} попадает в 2 декаду месяца.`);
}

if (dayNumber >= 21 && dayNumber <= 32) {
  alert(`Число ${dayNumber} попадает в 3 декаду месяца.`);
}
