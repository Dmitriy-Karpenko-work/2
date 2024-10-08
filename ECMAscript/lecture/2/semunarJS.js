// Создайте объект Person, представляющий человека, с
// следующими свойствами: name, age и gender. Добавьте
// также методы introduce и changeName. Метод introduce
// должен выводить информацию о человеке, включая его
// имя, возраст и пол. Метод changeName должен изменять
// имя человека на новое заданное значение.
// Person.name = "John";
// Person.age = 25;
// Person.gender = "male";
// Person.introduce(); // Ожидаемый результат: My name is
// John. I'm 25 years old and I identify as male.
// Person.changeName("Mike");

// const func = {
//   changeName: function (newName) {
//     this.name = newName;
//   },
//   changeAge: function (newAge) {
//     this.age = newAge;
//   },
//   changeGender: function (newGender) {
//     this.gender = newGender;
//   },
//   introduce: function () {
//     return `My name is  ${Person.name}. I'm ${this.age} years old and I identify as ${this.gender}`;
//   },
// };

// const Person = {
//   name: "...",
//   age: "...",
//   gender: "...",
// };

// console.log(calculator.add.call(obj, obj.num1, obj.num2));

// console.log(Person.name);
// console.log(Person.age);
// console.log(Person.gender);

// Person.changeName("Mike");
// Person.changeAge("25");
// Person.changeGender("Male");

// console.log(Person.introduce());

// Задание 2 (20минут)
// 1. Создайте объект Animal со свойством name и методом eat(), который
// выводит сообщение о том, что животное ест. Создайте объект Dog со
// свойством name и методом bark(), который выводит сообщение о
// том, что собака лает. Используйте одалживание метода eat() из
// объекта Animal для объекта Dog, чтобы вывести сообщение о том,
// что собака ест.
// // Одалживание метода eat() из объекта Animal к объекту Dog
// Dog.eat = Animal.eat;
// Dog.eat(); // Вывод: Rex is eating.

// const animal = {
//   name: "животное",

//   eat() {
//     return `${this.name}  ест`;
//   },
// };
// const Dog = {
//   name: "",
//   bark() {
//     return ` ${this.name} лает`;
//   },
//   //eat () {
//   //return `${this.name}  ест`;},
// };

// Dog.name = "Rex";
// Dog.eat = animal.eat;
// console.log(Dog);

// Задание 3 (call, apply 20 минут)
// 1. Создайте объект calculator с методами add(), subtract() и multiply(),
// которые выполняют соответствующие математические операции над
// двумя числами. Используйте методы call и apply для вызова этих
// методов с передачей аргументов.
// console.log(calculator.add.call(null, 5, 3)); // Вывод: 8
// console.log(calculator.subtract.apply(null, [5, 3])); // Вывод: 2

// const calculator = {
//   add(num1, num2) {
//     return num1 + num2;
//   },
//   subtract(num1, num2) {
//     return num1 - num2;
//   },
//   multiply(num1, num2) {
//     return num1 * num2;
//   },
// };

// console.log(calculator.add.call(null, 5, 3)); // Вывод: 8
// console.log(calculator.subtract.apply(null, [5, 3, 3])); // Вывод: 2

// const obj = {
//   num1: 20,
//   num2: 10,
// };
// // const obj2 = {
// //     num1: 20,
// //     num2: 10,
// //   };

// console.log(calculator.add.call(obj, obj.num1, obj.num2));
// console.log(calculator.add.call(obj.num1, obj.num2));
// console.log(calculator.add(obj, obj.num1, obj.num2));

// Задание 4 (Объекты через class 25 минут)
// 1. Создайте класс Person, который имеет свойства name и age, а также
// метод introduce(), который выводит сообщение с представлением
// имени и возраста персоны.
// const person = new Person("John", 25);
// person.introduce(); // Вывод: My name is John and I'm 25 years old

// class Person {
//     constructor(name, age) {
//         this.name = name;
//         this.age = age;

//    }
//    introduce() {
//     return `My name is ${this.name} and I'm ${this.age} years old.`;
//    }
// }

// const Ivan = new Person('Ivan', 18);
// //const Ivan = new Person('Ivan', 18, csc, adcaca, dsadcaa, acadawd);
// console.log(Ivan);
// console.log(Ivan.name);
// console.log(Ivan.age);
// console.log(Ivan.introduce());

// class personTwo {
//   constructor(name, age) {
//     this.name = name;
//     this.age = age;
//     this.greeting = function () {
//       console.log(`Hello, ${this.name}! Your age is ${this.age}`);
//     };
//   }
// }
// const Kolya = new personTwo("Kolya", 25);
// Kolya.greeting();

class BankAccount {
  static bankName = "SBER-BANK";
  constructor(accountNumber, balance) {
    this.accountNumber = accountNumber;
    this.balance = balance;
    // this.bankName = BankAccount.bankName;
  }
  deposit(amount) {
    this.balance += amount;
    console.log(
      `Deposited ${amount} into account ${this.accountNumber}. New balance: ${this.balance}`
    );
  }
  withdraw(amount) {
    if (this.balance >= amount) {
      this.balance -= amount;
      console.log(
        `Withdrawn ${amount} from account ${this.accountNumber}. New balance: ${this.balance}`
      );
    } else {
      console.log(`Insufficient funds in account ${this.accountNumber}`);
    }
  }
}
const account1 = new BankAccount(1233456, 700);
console.log(account1);
account1.deposit(300); //1000
account1.withdraw(900); //100
account1.withdraw(200); // error
