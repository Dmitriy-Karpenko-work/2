console.log(`---------------------------------------`);
class Student {
  constructor(name, age, grade) {
    this.name = name;
    this.age = age;
    this.grade = grade;
  }
  displayInfo() {
    console.log(` Name:${this.name}\n Age:${this.age}\n Grade:${this.grade}.`);
  }
}

// Пример использования класса
const student1 = new Student("John Smith", "16", "10th grade");
student1.displayInfo();
// Вывод:
// Name: John Smith
// Age: 16
// Grade: 10th grade

const student2 = new Student("Jane Doe", "17", "11th grade");
student2.displayInfo();
// Вывод:
// Name: Jane Doe
// Age: 17
// Grade: 11th grade"

document.addEventListener("DOMContentLoaded", function () {
  const form = document.querySelector(".studentBoxInput");

  form.addEventListener("submit", function (event) {
    event.preventDefault(); // Предотвращаем отправку формы по умолчанию

    const name = document.getElementById("nameStudent").value;
    const age = document.getElementById("ageStudent").value;
    const grade = document.getElementById("gradeStudent").value;
    const StudentUserInput = new Student(name, age, grade);

    StudentUserInput.displayInfo(); // Выводим в консоль
  });
});
