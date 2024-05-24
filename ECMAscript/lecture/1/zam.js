const createCounter = () => {
  let counter = 0;
  return () => {
    return ++counter;
  };
};

// Создаем счетчик.
const counter2 = createCounter();

//Создадим еще один счетчик. Каждый будет работать независимо.
const counter3 = createCounter();

console.log(counter3(), "вызов второго счетчика");
console.log(counter3(), "вызов второго счетчика");
console.log(counter3(), "вызов второго счетчика");
console.log(counter2(), "вызов первого счетчика");
console.log(counter2(), "вызов первого счетчика");
console.log(counter2(), "вызов первого счетчика");
console.log(counter2(), "вызов первого счетчика");
console.log(counter2(), "вызов первого счетчика");
console.log(counter2(), "вызов первого счетчика");
console.log(counter2(), "вызов первого счетчика");
console.log(counter3(), "вызов второго счетчика");

//counter3(createCounter) = () => {
//   let counter = 0;
//   return () => {
//     return ++counter;
//   };
// };
//////////////////////

const closureFunction = () => {
  const cache = {};
  return (x) => {
    if (cache[x]) return cache[x];
    const result = x * x;
    cache[x] = result;
    return result;
  };
};
const chachedPow = closureFunction();

console.log(chachedPow(2)); // 4
console.log(chachedPow(8)); // 64
console.log(chachedPow(2)); // 4
//— тут функция возьмёт значение из кеша и не будет
// вычислять его заново. Это особенно эффективно работает, когда мы имеем
// дело со сложными и тяжёлыми вычислениями или, например, запросами каких-то
// ресурсов из базы данных или внешних источников. Тут нельзя забывать о
// валидации кеша. Он может стать неактуальным, если мы имеем дело с базой
// данных или внешними источниками данных.
(function () {
  const sliderTexts = ["Promo", "Brands", "Best"];
  function showSlider(texts) {
    console.log(texts[0]);
    console.log(texts[1]);
    console.log(texts[2]);
  }
  showSlider(sliderTexts);
})();
