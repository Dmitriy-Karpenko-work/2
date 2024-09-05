// let obj = {
//   animal: "dog",
// };

// let obj2 = obj;
// obj = null;
// console.log(obj);
// console.log(obj2);

// const ratingSimbol = Symbol("rating");
// const reviewsSimbol = Symbol("reviews");
// const tagsSimbol = Symbol("tags");

// function addMetadata(bookArg, symbolArg, metadataArg) {
//   bookArg[symbolArg] = metadataArg;
// }

// function getMetadata(bookArg, symbolArg) {
//   return bookArg[symbolArg];
// }

// let book = {
//   title: "The Silmarillion",
//   autor: "J.Tolkien",
// };

// addMetadata(book, reviewsSimbol, ["Awesome book", "Great Book"]);
// addMetadata(book, ratingSimbol, ["4.5"]);
// addMetadata(book, tagsSimbol, ["adventure", "fantasy"]);

// console.log(book.title);
// console.log("Отзывы", getMetadata(book, reviewsSimbol));
// console.log("рейтинг", getMetadata(book, ratingSimbol));
// console.log("жанр", getMetadata(book, tagsSimbol));
// console.log("--------------------------------------------------");

// const books = [
//   { title: "1984", author: "George Orwell" },
//   { title: "Brave New World", author: "Aldous Huxley" },
//   { title: "Fahrenheit 451", author: "Ray Bradbury" },
// ];

// const SomeOneBooks = [
//   { title: "1984", author: "George Orwell" },
//   { title: "Brave New World", author: "Aldous Huxley" },
//   { title: "Fahrenheit 451", author: "Ray Bradbury" },
// ];
// const library = {
//   libraryBooks: SomeOneBooks, //[{}{}{}]
//   //   [Symbol.iterator]: function () {
//   //     let index = 0;
//   //     const books = this.libraryBooks;
//   //     return {
//   //       next() {
//   //         //Этот метод используется для получения следующего значения в последовательности
//   //         if (index < books.length) {
//   //           // Проверяем, есть ли еще книги в массиве, которые не были перебраны
//   //           return { value: books[index++], done: false }; // Возвращаем текущую книгу и увеличиваем индекс
//   //         }
//   //         return { done: true };// Если книг больше нет, сообщаем, что итерация закончена
//   //       },
//   //     };
//   //   },
// };
// // for (let book of library) {
// //   console.log(`title: ${book.title} // author: ${book.author}`);
// // }

// let SomeOneBooks = {
//   book1: { title: "1984", author: "George Orwell" },
//   book2: { title: "Brave New World", author: "Aldous Huxley" },
//   book3: { title: "Fahrenheit 451", author: "Ray Bradbury" },
// };

// let pseudo = {
//   0: "first",
//   1: "second",
//   length: 2,
// };
// let arrayCLG = Array.from(pseudo);
// let arrayCLG2 = Object.values(SomeOneBooks);
// console.log(arrayCLG);
// console.log(arrayCLG2);
