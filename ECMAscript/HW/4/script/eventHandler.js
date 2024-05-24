// Вызываем функцию проверки флажков при изменении состояния любой радиокнопки
radio1.addEventListener("change", checkFlags);
radio2.addEventListener("change", checkFlags);

// ---
async function checkFlags() {
  checkboxesApiArr = []; // Очищаем массив перед обновлением важно!!!
  tempArr = [];
  if (radio1.checked) {
    checkboxesApiArr.push("выбран api Users");
    //ждем когда будет получен запрос
    await fetchFunc(apiUrlUsers);
    addUser();
  } else {
    deleteCart();
  }
  if (radio1.checked) {
    checkboxesApiArr.push("checkbox2");
  } else {
  }
  console.log("Массив выбранных флажков:", checkboxesApiArr);
}

// Функция добавления в tempArr массива данных
async function fetchFunc(argUrl) {
  try {
    const response = await fetch(argUrl);
    const data = await response.json();
    tempArr.push(...data);
  } catch (error) {
    console.error(`Ошибка ${error}`);
  }
}
//функция очистки каталога
function deleteCart() {
  // Удаляем все дочерние элементы каталога
  while (CatalogEl.firstChild) {
    CatalogEl.removeChild(CatalogEl.firstChild);
  }
}
