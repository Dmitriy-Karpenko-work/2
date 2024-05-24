"use strict";
// alert("hello script js");
// function helloName(name) {
//   console.log(name);
// }

// helloName("dima");

// let count = 5;
// function counter() {
//   return count++;
// }

// counter();
// alert(count);

// let age = Number(prompt("сколько вам лет"));
// // function upAge() {
// //   return age + 5;
// // }
// // upAge();
// const lvlUpAge = () => age + 5;

// console.log(`через пять лет вам будет ${lvlUpAge()}`);
// alert(`через пять лет вам будет ${lvlUpAge()}`);

function HELLO() {
  console.log("hello console");
}

HELLO();
// const sum = (param1, param2) => {
//   return param1 + param2;
// };

// const result = sum(2, 5);
// console.log(result);

const salary = (money) => {
  money = money * 0.87;
  return money * 0.75;
};

const UserMoney = Number(prompt("сколько ты зарабатываеш"));
console.log(salary(UserMoney));
