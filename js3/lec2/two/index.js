document.addEventListener("DOMContentLoaded", function () {
  const openModalBtn = document.getElementById("openModalBtn");
  const modal = document.getElementById("modal");
  const closeBtn = modal.querySelector(".close");

  // Открытие модального окна
  openModalBtn.addEventListener("click", function () {
    modal.style.display = "block";
    document.body.style.overflow = "hidden"; // Запретить скролл на заднем фоне
  });

  // Закрытие модального окна по клику на кнопку закрытия
  closeBtn.addEventListener("click", function () {
    modal.style.display = "none";
    document.body.style.overflow = ""; // Разрешить скролл на заднем фоне
  });

  // Закрытие модального окна по клику на задний фон
  modal.addEventListener("click", function (event) {
    if (event.target === modal) {
      modal.style.display = "none";
      document.body.style.overflow = ""; // Разрешить скролл на заднем фоне
    }
  });

  // Закрытие модального окна по нажатию клавиши Escape
  document.addEventListener("keydown", function (event) {
    if (event.key === "Escape" && modal.style.display === "block") {
      modal.style.display = "none";
      document.body.style.overflow = ""; // Разрешить скролл на заднем фоне
    }
  });
});
