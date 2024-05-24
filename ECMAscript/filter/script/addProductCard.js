const wraperCatalogEl = document.querySelector("div.frameOne__catalog");

function addProductCart(arr) {
  // Применяем DisplayProductCart к каждому элементу
  arr.forEach((elem) => DisplayProductCart(elem));
}

function DisplayProductCart(element) {
  //создаем карточку (пока пустую)//создание обертки карточки
  const productCardEl = document.createElement("div");
  productCardEl.classList.add("catalog__cart", "cart");
  // блок изображение
  const productCardEl__image = document.createElement("img");
  productCardEl__image.classList.add("cart__image");
  productCardEl__image.setAttribute("src", element.img);
  productCardEl__image.setAttribute("alt", element.name);
  // блок инфо
  const productCardEl__info = document.createElement("div");
  productCardEl__info.classList.add("cart__info", "info");
  // Создаем создаем элементы для блока
  const productCardEl__info_name = document.createElement("span");
  const productCardEl__info_category = document.createElement("span");
  const productCardEl__info_brand = document.createElement("span");
  const productCardEl__info_discription = document.createElement("span");
  const productCardEl__info_price = document.createElement("span");

  // для отладки удалить после
  const productCardEl__info_id = document.createElement("span");
  const productCardEl__info_numder = document.createElement("span");

  // --имя------------
  productCardEl__info_name.classList.add("info__name");
  productCardEl__info_name.innerHTML = element.name;
  //---категоря--------------
  productCardEl__info_category.classList.add("info__category");
  productCardEl__info_category.innerHTML = element.category;
  //---бренд--------------
  productCardEl__info_brand.classList.add("info__brand");
  productCardEl__info_brand.innerHTML = element.brand;
  //----описание-------------
  productCardEl__info_discription.classList.add("info__discription");
  productCardEl__info_discription.innerHTML = element.discription;
  //-----цена------------
  productCardEl__info_price.classList.add("info__price");
  productCardEl__info_price.innerHTML = element.price;

  // для отладки удалить после
  productCardEl__info_id.classList.add("info__id");
  productCardEl__info_id.innerHTML = "id товара для отладки " + element.id;
  productCardEl__info_numder.classList.add("info__number");
  productCardEl__info_numder.innerHTML =
    "номер товара для отладки " + element.number;
  //

  // Добавляем созданные элементы в родительский элемент
  productCardEl.appendChild(productCardEl__image); //обертки карточки -> обертки изображение
  productCardEl__info.appendChild(productCardEl__info_name); //обертки информации -> название
  productCardEl__info.appendChild(productCardEl__info_category); //обертки информации -> категория
  productCardEl__info.appendChild(productCardEl__info_brand); //обертки информации -> бронд
  productCardEl__info.appendChild(productCardEl__info_discription); //обертки информации -> описание
  productCardEl__info.appendChild(productCardEl__info_price); //обертки информации -> цена

  // для отладки удалить после

  productCardEl__info.appendChild(productCardEl__info_id); //обертки информации -> id
  productCardEl__info.appendChild(productCardEl__info_numder); //обертки информации -> number

  //

  productCardEl.appendChild(productCardEl__info); //обертки карточки -> обертки информации

  wraperCatalogEl.append(productCardEl);
}

// <div class="frameOne__catalog catalog">
//       <span class="catalog__title">Каталог</span>
//       <!-- !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!! -->
//       <!-- вопрос по методологии bem допустима ли такая запись -->
//       <div class="catalog__cart cart">
//         <img class="cart__image" src="iphone13.jpg" alt="iPhone 13" />

//         <div class="cart__info">
//           <h2 class="cart__name">iPhone 13</h2>
//           <p class="cart__category">Категория: Phone</p>
//           <p class="cart__brand">Бренд: Apple</p>
//           <p class="cart__text">
//             Новая модель iPhone от Apple. Этот смартфон обладает передовыми
//             технологиями, включая мощный процессор, улучшенную камеру и
//             долговечную батарею. Он предлагает высокую производительность и
//             впечатляющий дизайн.
//           </p>
//           <p class="cart__price">Цена: $999</p>
//         </div>
