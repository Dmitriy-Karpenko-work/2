document.addEventListener("DOMContentLoaded", function () {
  const buyButton = document.getElementById("buy-button");

  buyButton.addEventListener("click", function (event) {
    if (event.isTrusted) {
      const originalText = buyButton.innerText;

      buyButton.innerText = "Товар добавлен в корзину";

      setTimeout(function () {
        buyButton.innerText = originalText;
      }, 2000);
    }
  });
});
