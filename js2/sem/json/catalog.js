const wrapperProductCardEl = document.querySelector("div.wrapperProductCard");

let catalogArray = []; // Создаем пустой массив

fetch("./dataCatalog.json")
  .then((response) => response.json())
  .then((json) => {
    catalogArray = json; // Присваиваем полученные данные массиву
    console.log(catalogArray); // Выводим массив в консоль (можно удалить эту строку)

    catalogArray.slice(0, 6).forEach((element) => {
      const ProductEl = document.createElement("div");
      ProductEl.classList.add("productCard");
      // блок изображение
      const ProductEl_productCard__img = document.createElement("div");
      const ProductEl_img = document.createElement("img");
      ProductEl_productCard__img.classList.add("productCard__img");
      ProductEl_img.setAttribute("src", element.img_url);
      // блок инфо
      const ProductEl_textContent = document.createElement("div");
      ProductEl_textContent.classList.add("productCard__textContent");
      //-----------
      const ProductEl_textContent_title = document.createElement("span");
      ProductEl_textContent_title.innerHTML = element.name;
      //-------
      const ProductEl_textContent_text = document.createElement("span");
      ProductEl_textContent_text.innerHTML = element.description;
      //-------
      const ProductEl_textContent_price = document.createElement("span");
      ProductEl_textContent_price.innerHTML = element.price;
      //-------

      ProductEl.appendChild(ProductEl_productCard__img); //создание обертки карточки
      ProductEl_productCard__img.appendChild(ProductEl_img); //обертки карточки -> обертки изображение
      ProductEl.appendChild(ProductEl_textContent); //обертки карточки -> изображение
      ProductEl.appendChild(ProductEl_textContent); //обертки карточки -> обертки информации

      ProductEl_textContent.appendChild(ProductEl_textContent_title); //обертки информации -> название
      ProductEl_textContent.appendChild(ProductEl_textContent_text); //обертки информации -> текст
      ProductEl_textContent.appendChild(ProductEl_textContent_price); //обертки информации -> цена

      wrapperProductCardEl.appendChild(ProductEl);
    });
  });
