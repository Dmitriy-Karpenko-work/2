let tempArr = []; // Здесь будут храниться данные из базы данных

// После загрузки страницы выполняем запрос к базе данных
document.addEventListener("DOMContentLoaded", function () {
  loadDataFromDB(); // Функция для загрузки данных из базы данных
});

// Функция для загрузки данных из базы данных
function loadDataFromDB() {
  fetch("../bd/DataBase.json")
    .then((response) => response.json())
    .then((data) => {
      tempArr = data; // Сохраняем данные в переменной tempArr
      console.log("Данные из базы данных успешно загружены");
    })
    .catch((error) =>
      console.error("Ошибка при загрузке данных из базы данных:", error)
    );
}

// Затем обрабатываем изменения в выпадающем списке quantitySelect
const quantitySelect = document.querySelector(".filterSort__quantitySelect");

quantitySelect.addEventListener("change", function (event) {
  const selectedValue = event.target.value;

  if (selectedValue === "six") {
    console.log("Выбрано: six");
    showSix();
  } else if (selectedValue === "twelve") {
    console.log("Выбрано: twelve");
    showTwelve();
  } else if (selectedValue === "twentyFour") {
    console.log("Выбрано: twentyFour");
    showTwentyFour();
  } else {
    console.log("Выбран некорректный вариант сортировки 'отладка'");
  }
});

// Функции для отображения продуктов
function showSix() {
  console.log("Каталог из 6 карточек");
  deleteCatalog();
  tempArr.slice(0, 6).forEach((element) => DisplayProductCart(element));
}

function showTwelve() {
  console.log("Каталог из 12 карточек");
  deleteCatalog();
  tempArr.slice(0, 12).forEach((element) => DisplayProductCart(element));
}

function showTwentyFour() {
  console.log("Каталог из 24 карточек");
  deleteCatalog();
  tempArr.slice(0, 24).forEach((element) => DisplayProductCart(element));
}

// Функция для удаления текущего каталога
function deleteCatalog() {
  document
    .querySelectorAll("div.catalog__cart")
    .forEach((cart) => cart.remove());
}
