let tempArr = []; // Создаем пустой массив
document.addEventListener("DOMContentLoaded", function () {
  const checkboxes = document.querySelectorAll(
    '.bdConent input[type="checkbox"]'
  );

  checkboxes.forEach(function (checkbox) {
    checkbox.addEventListener("change", function () {
      tempArr = []; // Очищаем массив перед добавлением новых данных !!!ВАЖНО!!!

      checkboxes.forEach(function (checkbox) {
        if (checkbox.checked) {
          if (checkbox.id === "bdTablet") {
            fetch("../bd/TabletBase.json")
              .then((response) => response.json())
              .then((data) => {
                data.forEach(
                  (product) =>
                    (product.price = parseFloat(product.price.replace("$", "")))
                );
                tempArr.push(...data);
                console.log("Данные из TabletBase.json добавлены в tempArr");
                console.log(tempArr); // Выводим tempArr в консоль после добавления данных
              })
              .catch((error) =>
                console.error(
                  "Ошибка при загрузке файла TabletBase.json:",
                  error
                )
              );
          } else if (checkbox.id === "bdPhone") {
            fetch("../bd/PhoneBase.json")
              .then((response) => response.json())
              .then((data) => {
                data.forEach(
                  (product) =>
                    (product.price = parseFloat(product.price.replace("$", "")))
                );
                tempArr.push(...data);
                console.log("Данные из PhoneBase.json добавлены в tempArr");
                console.log(tempArr); // Выводим tempArr в консоль после добавления данных
              })
              .catch((error) =>
                console.error(
                  "Ошибка при загрузке файла PhoneBase.json:",
                  error
                )
              );
          }
          //   console.log(tempArr); // Выводим tempArr в консоль после добавления данных

          console.log("----------------------------------------");
        }
      });
    });
  });
});

const applyBD = document.querySelector(".bdApply");
applyBD.addEventListener("click", function () {
  deleteCatalog();
  addProductCart(tempArr);
});
