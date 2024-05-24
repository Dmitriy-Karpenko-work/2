console.log("задание 1 ");
class Employee {
  constructor(name) {
    this.name = name;
  }

  displayInfo() {
    console.log("Имя сотрудника:", this.name);
  }
}

class Manager extends Employee {
  constructor(name, department) {
    super(name);
    this.department = department;
  }

  displayInfo() {
    super.displayInfo();
    console.log("Отдел:", this.department);
  }
}

// Пример использования классов
const employee1 = new Employee("Дмитрий К");
employee1.displayInfo();
console.log("использован стандартный конструктор");
console.log("----------------------------");

const manager1 = new Manager("Александр К", "Склад");
manager1.displayInfo();
console.log(
  "использован конструктор который наследует способ создания имени из предыдущего конструктора и добавляет ещё одно свойство "
);
console.log(
  "так же использован метод/функция вывода информации в консоль наследования из пердыдущего объекта"
);
console.log("----------------------------");
console.log("задание 2 ");
class Order {
  constructor(orderNumber, productsArr = []) {
    this.orderNumber = orderNumber;
    this.productsArr = productsArr;
  }

  addProduct(...productsArr) {
    productsArr.forEach((product) => {
      this.productsArr.push(product);
    });
  }

  displayInfoBag() {
    if (this.productsArr.length === 0) {
      console.log(
        `номер вашего заказа '${this.orderNumber}' ваша корзина пустая`
      );
    } else {
      console.log("--------начало корзины-----------------");
      console.log(
        `номер вашего заказа '${this.orderNumber}' в вашей корзине следующие продукты`
      );
      this.productsArr.forEach((product) => {
        console.log(product.name);
      });
      console.log("--------конец корзины-----------------");
    }
  }
  getTotalPrice() {
    const totalPrice = this.productsArr.reduce(
      (accumulator, product) => accumulator + product.price,
      0
    );
    console.log(`Стоимость продуктов в корзине ${totalPrice} р.`);
    return totalPrice;
  }
}

const order1 = new Order(1);
order1.addProduct(
  { name: "apple", price: 30 },
  { name: "cola", price: 100 },
  { name: "banan", price: 50 }
);
order1.displayInfoBag();
order1.getTotalPrice();
console.log("--------Задание 3 (дополнительное)-------");
class ZooAnimal {
  #name; //имя животного (строка).
  #age; // возраст животного (число)
  #gender; //пол животного (строка).

  static MAX_AGE = 20;
  //только латинские буквы
  static LATIN_NAME_REGEX = /^[A-Za-z]+$/;
  // в России только 2 пола
  static VALID_GENDERS = ["male", "female"];

  constructor(name, age, gender) {
    //проверка что бы при создании животного бвозраст не превышал 20 лет
    if (age > ZooAnimal.MAX_AGE) {
      throw new Error(`Возраст не может быть больше ${ZooAnimal.MAX_AGE}`);
    }
    //проверка на латинские букывы
    if (!ZooAnimal.LATIN_NAME_REGEX.test(name)) {
      throw new Error("Имя должно содержать только латинские буквы");
    }
    //проверка на пол
    if (!ZooAnimal.VALID_GENDERS.includes(gender)) {
      throw new Error('Пол должен быть "male" или "female"');
    }
    this.#name = name;
    this.#age = age;
    this.#gender = gender;
  }

  changeName(newName) {
    this.#name = newName;
  }
  changeAge(newAge) {
    this.#age = newAge;
  }
  getInfo() {
    console.log(`    имя животного: ${this.#name},  
    возраст: ${this.#age} года, 
    пол: ${this.#gender}`);
  }
}

const myAnimal1 = new ZooAnimal("tiger", 3, "male");
console.log(myAnimal1);
myAnimal1.getInfo();
