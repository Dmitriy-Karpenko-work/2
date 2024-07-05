document.addEventListener("DOMContentLoaded", function () {
  const menuItems = document.querySelectorAll(".menu-item");

  menuItems.forEach((item) => {
    item.addEventListener("click", function () {
      // Удаляем класс 'active' у всех пунктов меню
      menuItems.forEach((item) => {
        item.classList.remove("active");
      });

      // Добавляем класс 'active' только текущему элементу
      this.classList.add("active");
    });
  });
});
