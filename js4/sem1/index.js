// Задание 1 (тайминг 20 минут)
// Создать механизм для безопасного добавления метаданных к
// объектам книг с использованием Symbol.
// 1. Создать уникальные символы для метаданных: отзывы,
// рейтинг, теги.
// 2. Реализовать функции addMetadata (добавление метаданных)
// и getMetadata (получение метаданных).
// 3. Создать объект книги, добавить метаданные и вывести их на
// консоль.
function addMetadata(bookArg, symbolArg, MetadataArg) {
  bookArg[symbolArg] = [MetadataArg];
}
function getMetadata(bookArg, symbolArg) {
  return bookArg[symbolArg];
}
let book = {
  title: "The Silmarillion",
  autor: "J.Tolkien",
};

const ratingSymbol = Symbol("Rating");
const reviewSymbol = Symbol("Review");
const tagsSymbol = Symbol("Tags");

addMetadata(book, reviewSymbol, "Отличное книга о приключениях");
addMetadata(book, ratingSymbol, 4.5);
addMetadata(book, tagsSymbol, "Приключения", "Фэнтези");

console.log(`Название: ${book.title}
Отзывы: ${getMetadata(book, reviewSymbol)}
Рейтинг: ${getMetadata(book, ratingSymbol)}
Жанр: ${getMetadata(book, tagsSymbol)}`);
