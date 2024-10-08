// Задание 1
// • Используя Symbol.iterator, создайте объект "Музыкальная коллекция", который можно итерировать.
//  Каждая итерация должна возвращать следующий альбом из коллекции.

// • Создайте объект musicCollection, который содержит массив альбомов и имеет свойство-символ Symbol.iterator.
//  Каждый альбом имеет следующую структуру:
// {
// title: "Название альбома",
// artist: "Исполнитель",
// year: "Год выпуска"
// }
// • Реализуйте кастомный итератор для объекта musicCollection.
//  Итератор должен перебирать альбомы по порядку.
// • Используйте цикл for...of для перебора альбомов в музыкальной коллекции и
//вывода их на консоль в формате:
//  Название альбома - Исполнитель (Год выпуска)
console.log("задание 1");
const musicCollection = {
  albums: [
    { artist: "Led Zeppelin", album: "IV", year: 1971 },
    { artist: "Pink Floyd", album: "The Dark Side of the Moon", year: 1973 },
    { artist: "The Beatles", album: "Abbey Road", year: 1969 },
    { artist: "The Rolling Stones", album: "Exile on Main St.", year: 1972 },
    { artist: "Nirvana", album: "Nevermind", year: 1991 },
    { artist: "Queen", album: "A Night at the Opera", year: 1975 },
    { artist: "AC/DC", album: "Back in Black", year: 1980 },
    { artist: "Guns N' Roses", album: "Appetite for Destruction", year: 1987 },
    { artist: "Metallica", album: "Master of Puppets", year: 1986 },
    { artist: "U2", album: "The Joshua Tree", year: 1987 },
  ],
  [Symbol.iterator]: function () {
    let CurrentIndex = 0;
    const albums = this.albums;
    return {
      next() {
        if (CurrentIndex < albums.length)
          return { value: albums[CurrentIndex++], done: false };

        return {
          done: true,
        };
      },
    };
  },
};
for (let album of musicCollection) {
  console.log(` ${album.album} - ${album.artist} (${album.year})`);
}
console.log("----------------------------------------");
console.log("задание 2");

// Задание 2
// Вы управляете рестораном, в котором работают разные повара,
// специализирующиеся на определенных блюдах.
// Клиенты приходят и делают заказы на разные блюда.
// Необходимо создать систему управления этими заказами, которая позволит:

// • Отслеживать, какой повар готовит какое блюдо.
// • Записывать, какие блюда заказал каждый клиент.

// Используйте коллекции Map для хранения блюд и их поваров,
//  а также для хранения заказов каждого клиента.
//  В качестве ключей для клиентов используйте объекты.

// Повара и их специализации:

// Виктор - специализация: Пицца.
// Ольга - специализация: Суши.
// Дмитрий - специализация: Десерты.

// Блюда и их повара:

// Пицца "Маргарита" - повар: Виктор.
// Пицца "Пепперони" - повар: Виктор.
// Суши "Филадельфия" - повар: Ольга.
// Суши "Калифорния" - повар: Ольга.
// Тирамису - повар: Дмитрий.
// Чизкейк - повар: Дмитрий.

// Заказы:

// Клиент Алексей заказал: Пиццу "Пепперони" и Тирамису.
// Клиент Мария заказала: Суши "Калифорния" и Пиццу "Маргарита".
// Клиент Ирина заказала: Чизкейк.
