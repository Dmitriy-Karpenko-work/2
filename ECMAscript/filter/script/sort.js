const sortSelect = document.querySelector(".filterSort__sort select");

sortSelect.addEventListener("change", function (event) {
  const selectedValue = event.target.value;
  if (selectedValue === "priceAsc") {
    sortProductsByPriceAsc();
  } else if (selectedValue === "priceDesc") {
    sortProductsByPriceDesc();
  } else if (selectedValue === "date") {
    sortProductsByDate();
  } else if (selectedValue === "name") {
    sortProductsByName();
  } else {
    console.log("Выбран некорректный вариант сортировки 'отладка'");
  }
});

// Функции для сортировки по возрастанию
function sortProductsByPriceAsc() {
  console.log("выбрана сортировка по возрастанию цены 'отладка'");
  deleteCatalog();
  console.log("-----------------------------------------");
  const sortedArr = tempArr.sort((a, b) => {
    const priceA = Number(a.price.replace("$", ""));
    const priceB = Number(b.price.replace("$", ""));
    return priceA - priceB;
  });

  sortedArr.forEach((element) => DisplayProductCart(element));
  console.log("функция сортировки цены по возрастанию отработала  'отладка'");
  console.log(tempArr);
}

// Функции для сортировки по убыванию
function sortProductsByPriceDesc() {
  console.log("выбрана сортировка по убыванию цены 'отладка'");
  deleteCatalog();
  console.log("-----------------------------------------");
  const sortedArr = tempArr.sort((a, b) => {
    const priceA = Number(a.price.replace("$", ""));
    const priceB = Number(b.price.replace("$", ""));
    return priceB - priceA;
  });
  sortedArr.forEach((element) => DisplayProductCart(element));
  console.log("функция сортировки цены по убыванию отработала  'отладка'");
  console.log(tempArr);
}
// Сортировка продуктов по дате
function sortProductsByDate() {
  console.log("выбрана сортировка по дате 'отладка'");
  deleteCatalog();
  console.log("-----------------------------------------");

  const sortedArr = tempArr.sort((a, b) => {
    return parseInt(a.id) - parseInt(b.id); // Сортировка по возрастанию id
  });

  sortedArr.forEach((element) => DisplayProductCart(element));

  console.log("функция сортировки по дате отработала 'отладка'");
  console.log(tempArr);
}
// Сортировка продуктов по имени
function sortProductsByName() {
  console.log("выбрана сортировка по имени 'отладка'");
  deleteCatalog();
  console.log("-----------------------------------------");

  const sortedArr = tempArr.sort((a, b) => {
    const nameA = a.name.toLowerCase();
    const nameB = b.name.toLowerCase();
    return nameA.localeCompare(nameB); // Сортировка с использованием метода localeCompare
  });

  sortedArr.forEach((product) => {
    // Предполагается, что у вас есть функция DisplayProductCart, которая принимает объект продукта и отображает его
    DisplayProductCart(product);
  });

  console.log("функция сортировка по имени отработала 'отладка'");
  console.log(tempArr);
}

function deleteCatalog() {
  // удаляем предыду
  document
    .querySelectorAll("div.catalog__cart")
    .forEach((cart) => cart.remove());
  console.log("функция удаления отработала 'отладка'");
}

//---------------------------------

// function DisplayProductCart() {
//   tempArr.forEach((element) => {
//     AddProducrtFunc(element);
//     // // Создание карточки товара
//     // const productCardEl = document.createElement("div");
//     // productCardEl.classList.add("catalog__cart", "cart");

//     // // Создание блока изображения
//     // const productCardEl__image = document.createElement("img");
//     // productCardEl__image.classList.add("cart__image");
//     // productCardEl__image.setAttribute("src", element.img);
//     // productCardEl__image.setAttribute("alt", element.name);

//     // // Создание блока информации
//     // const productCardEl__info = document.createElement("div");
//     // productCardEl__info.classList.add("cart__info", "info");

//     // // Создание элементов информации
//     // const productCardEl__info_name = document.createElement("span");
//     // productCardEl__info_name.classList.add("info__name");
//     // productCardEl__info_name.innerHTML = element.name;

//     // const productCardEl__info_category = document.createElement("span");
//     // productCardEl__info_category.classList.add("info__category");
//     // productCardEl__info_category.innerHTML = element.category;

//     // const productCardEl__info_brand = document.createElement("span");
//     // productCardEl__info_brand.classList.add("info__brand");
//     // productCardEl__info_brand.innerHTML = element.brand;

//     // const productCardEl__info_discription = document.createElement("span");
//     // productCardEl__info_discription.classList.add("info__discription");
//     // productCardEl__info_discription.innerHTML = element.discription;

//     // const productCardEl__info_price = document.createElement("span");
//     // productCardEl__info_price.classList.add("info__price");
//     // productCardEl__info_price.innerHTML = element.price;

//     // // для отладки удалить после
//     // const productCardEl__info_id = document.createElement("span");
//     // const productCardEl__info_numder = document.createElement("span");
//     // productCardEl__info_id.classList.add("info__id");
//     // productCardEl__info_id.innerHTML = "id товара для отладки " + element.id;
//     // productCardEl__info_numder.classList.add("info__number");
//     // productCardEl__info_numder.innerHTML =
//     //   "номер товара для отладки " + element.number;

//     // productCardEl__info.appendChild(productCardEl__info_id); //обертки информации -> id
//     // productCardEl__info.appendChild(productCardEl__info_numder); //обертки информации -> number

//     // //
//     // //

//     // // Добавление элементов в блок информации
//     // productCardEl__info.appendChild(productCardEl__info_name);
//     // productCardEl__info.appendChild(productCardEl__info_category);
//     // productCardEl__info.appendChild(productCardEl__info_brand);
//     // productCardEl__info.appendChild(productCardEl__info_discription);
//     // productCardEl__info.appendChild(productCardEl__info_price);

//     // // Добавление изображения и блока информации в карточку
//     // productCardEl.appendChild(productCardEl__image);
//     // productCardEl.appendChild(productCardEl__info);

//     // // Добавление карточки в обертку каталога
//     // wraperCatalogEl.append(productCardEl);

//     console.log("сортировка выполнена успешно красава");
//   });
// }
