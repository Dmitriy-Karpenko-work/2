document.addEventListener("DOMContentLoaded", () => {
  const dogImagesContainer = document.getElementById("dog-images");

  let imageCount = 0;
  const maxImages = 10;
  const interval = 3000;

  // Функция для получения и отображения картинки
  async function fetchAndDisplayDogImage() {
    try {
      const response = await fetch("https://dog.ceo/api/breeds/image/random");
      const data = await response.json();
      const img = document.createElement("img");
      img.src = data.message;
      img.alt = "Dog image";
      img.className = "dog-image";
      dogImagesContainer.appendChild(img);
      imageCount++;
    } catch (error) {
      console.error("Ошибка при получении картинки собаки:", error);
    }
  }

  // Запускаем интервал для добавления картинок
  const intervalId = setInterval(() => {
    if (imageCount >= maxImages) {
      clearInterval(intervalId);
    } else {
      fetchAndDisplayDogImage();
    }
  }, interval);
});
