const colors = [
  "#3498db",
  "#e74c3c",
  "#2ecc71",
  "#f39c12",
  "#9b59b6",
  "#1abc9c",
  "#34495e",
  "#e67e22",
  "#95a5a6",
  "#27ae60",
];
// Счетчик элементов
let elementCount = 0;
// Получаем кнопки  для элементов
const addButton = document.querySelector("#addButton");
const cloneButton = document.querySelector("#cloneButton");
const deleteButton = document.querySelector("#deleteButton");
//контейнеор
const elementsContainer = document.querySelector("#elementsContainer");

// Обработчик клика на кнопку "Добавить элемент"
addButton.addEventListener("click", function () {
  elementCount++;
  //-------------------------------------------
  // Создаем новый элемент .box
  const newElement = document.createElement("div");
  newElement.className = "box";
  newElement.textContent = elementCount;
  // Выбираем случайный цвет из массива colors
  const randomColor = colors[Math.floor(Math.random() * colors.length)];
  newElement.style.backgroundColor = randomColor;
  //----------------------------------------
  // Добавляем новый элемент в контейнер
  elementsContainer.appendChild(newElement);
});

// Обработчик клика на кнопку "Удалить элемент"
deleteButton.addEventListener("click", function () {
  const elements = document.querySelectorAll(".box");

  if (elements.length > 0) {
    // Удаляем последний элемент
    elements[elements.length - 1].remove();
    elementCount--;
  }
});

// Обработчик клика на кнопку "Клонировать элемент"
cloneButton.addEventListener("click", function () {
  const elements = document.querySelectorAll(".box");

  if (elements.length > 0) {
    // Получаем последний элемент
    const lastElement = elements[elements.length - 1];
    // Создаем копию последнего элемента
    const cloneElement = lastElement.cloneNode(true);
    elementCount++;
    cloneElement.textContent = elementCount;
    elementsContainer.appendChild(cloneElement);
  }
});
