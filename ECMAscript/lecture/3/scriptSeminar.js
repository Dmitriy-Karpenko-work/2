// const product = {
//   name: "smartphone",
//   price: "500",
//   getDiscription(discount) {
//     const finalprice = this.price - discount;
//     return `товар ${this.name} будет стоять ${finalprice}`;
//   },
// };
// function calcdiscaunt(procent) {
//   return (this.price * procent) / 100;
// }

// const product1 = calcdiscaunt.call(product, 30);
// console.log(product1);
// console.log("------------------------");
// const product2 = calcdiscaunt.apply(product, [50]);
// console.log(product2);
// console.log("------------------------");

// const discriptionDiscount = product.getDiscription.call(product, product1);
// console.log(discriptionDiscount);

//-------------------------------------------------
// function getPrototypeChain(obj) {
//   const parents = [];
//   while (obj !== null) {
//     parents.push(obj);
//     obj = Object.getPrototypeOf(obj);
//   }
//   return parents;
// }
// console.log(getPrototypeChain({ a: "1" }));

//-------------------------------------------------
// class Animal {
//   constructor(name) {
//     this.name = name;
//   }
//   speak() {
//     console.log(`${this.name} издаёт звук`);
//   }
// }
// class Dog extends Animal {
//   constructor(name, breed) {
//     super(name);
//     this.breed = breed;
//   }
//   fetch() {
//     console.log(`собака ${this.breed} по имени ${this.name} принесла мяч`);
//   }
// }
// const animalDog = new Animal("rex");
// animalDog.speak();
// const goggy = new Dog("lord", "alabay");
// goggy.speak();
// goggy.fetch();

// Создать класс "Пользователь" с приватными полями "имя", "возраст" и "электронная почта".
//  Класс должен иметь публичные методы "изменить имя", "изменить возраст" и "
//  изменить электронную почту", которые будут изменять соответствующие поля объекта.
//  Также класс должен иметь статическое поле "максимальный возраст",
//  которое будет задавать максимально допустимый возраст для всех создаваемых объектов.

// class User {
//   #name;
//   #age;
//   #email;
//   static #maxAge = 99;
//   constructor(name, age, email) {
//     this.#name = name;
//     this.#age = age;
//     this.#email = email;
//     if (age > User.#maxAge) {
//       throw new Error("возраст недопустим");
//     }
//   }
//   setName(newName) {
//     this.#name = newName;
//   }
//   setAge(newAge) {
//     if (newAge > User.#maxAge) {
//       throw new Error("возраст недопустим");
//     }
//     this.#age = newAge;
//   }
//   setEmail(newEmail) {
//     this.#email = newEmail;
//   }
//   getInfo() {
//     console.log(
//       `информация об: имя ${this.#name}, возраст ${this.#age}, почта ${
//         this.#email
//       }`
//     );
//   }
// }

// const vasya = new User("Vasya", 15, "1234@55.ru");
// vasya.getInfo();
// vasya.setAge(50);
// vasya.getInfo();
// vasya.setAge(150);
// vasya.getInfo();

// const lena = new User("Elena", 150, "123@123");

class Product {
  #name;
  #price;
  #quantity;
  weight;
  static maxQuantity = 10;
  constructor(name, price, quantity, weight) {
    this.#name = name;
    this.#price = price;
    if (quantity > Product.maxQuantity) {
      throw new Error("количество превышено");
    }
    this.#quantity = quantity;
    this.weight = weight;
  }
  get name() {
    return this.#name;
  }
  get price() {
    return this.#price;
  }
  get quantity() {
    return this.#quantity;
  }
  setName(newName) {
    this.#name = newName;
  }
  setWeight(newWeight) {
    this.weight = newWeight;
  }
}

const phone = new Product("Iphone", 100, 9, 150);
phone.name; // phone.getName()
phone.name = "huawei";
console.log(phone.name);
