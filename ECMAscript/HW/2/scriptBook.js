class Book {
  constructor(title, author, pages) {
    this.title = title;
    this.author = author;
    this.pages = pages;
  }
  displayInfo() {
    console.log(
      `Название книги ${this.title}, автор книги ${this.author}, кол-во страниц ${this.pages}.`
    );
  }
}

const Book1 = new Book("Война и мир", "Лев Толстой", "1225");
Book1.displayInfo();
const Book2 = new Book("1984", "Джордж Оруэлл", "328");
Book2.displayInfo();
const Book3 = new Book("Мастер и Маргарита", "Михаил Булгаков", "384");
Book3.displayInfo();

const Bookcustom = new Book("Война и мир", "Лев Толстой", "1225");

document.addEventListener("DOMContentLoaded", function () {
  const form = document.querySelector(".bookBoxInput");

  form.addEventListener("submit", function (event) {
    event.preventDefault(); // Предотвращаем отправку формы по умолчанию

    const title = document.getElementById("bookTitle").value;
    const author = document.getElementById("bookAuthor").value;
    const pages = document.getElementById("bookPages").value;
    const bookUserInput = new Book(title, author, pages);

    bookUserInput.displayInfo(); // Выводим в консоль
  });
});
