const quantitySelect = document.querySelector(".filterSort__quantitySelect");
quantitySelect.addEventListener("change", function (event) {
  const selectedValue = event.target.value;
  if (selectedValue === "six") {
    console.log("Выбрано: six");
    showSix();
  } else if (selectedValue === "twqelve") {
    console.log("Выбрано: twqelve");
    showTwelve();
  } else if (selectedValue === "twentyFour") {
    console.log("Выбрано: twentyFour");
    showTwentyFour();
  } else {
    console.log("Выбран некорректный вариант сортировки 'отладка'");
  }
});
function checkCutArr(arr) {}
function showSix() {
  console.log("каталог из 6 карточек");
  deleteCatalog();
  const tempArrCopy = tempArr.slice(0, 6); // Создаем копию tempArr
  tempArrCopy.forEach((element) => {
    DisplayProductCart(element);
  });
}

function showTwelve() {
  console.log("каталог из 12 карточек");
  deleteCatalog();
  const tempArrCopy = tempArr.slice(0, 12); // Создаем копию tempArr
  tempArrCopy.forEach((element) => {
    DisplayProductCart(element);
  });
}

function showTwentyFour() {
  console.log("каталог из 24 карточек");
  deleteCatalog();
  const tempArrCopy = tempArr.slice(0, 24); // Создаем копию tempArr
  tempArrCopy.forEach((element) => {
    DisplayProductCart(element);
  });
}

// function checkSelectedOption() {
//   // Получаем элемент select
//   const quantitySelect = document.getElementById("quantitySelect");

//   // Получаем выбранный вариант
//   const selectedOption =
//     quantitySelect.options[quantitySelect.selectedIndex].value;

//   // Возвращаем выбранный вариант
//   return selectedOption;
// }

// const selectedValue = checkSelectedOption();
// console.log("Выбран вариант: " + selectedValue);
