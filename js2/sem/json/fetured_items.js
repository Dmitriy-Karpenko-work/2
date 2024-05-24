document.addEventListener("DOMContentLoaded", function () {
  const DataJS = `[
        {
            "class":"fetured_items__product_carts__product_cart",
            "imgUrl":"img/index/product_1.png",
            "name": "ELLERY X M'O CAPSULE",
            "text":"Known for her sculptural takes on traditional tailoring, Australianarbiter of cool Kym Ellery teams up with Moda Operandi.",
            "price": "52$"
        }
    ]`;

  const data = JSON.parse(DataJS);
  console.log(data);
  const cartConteiner = document.querySelector(".fetured_items__product_carts");

  data.forEach((element) => {
    const tempEl = document
      .getElementById("cartTemplate")
      .content.cloneNode(true);
    const img = tempEl.querySelector(".product_cart__img img");
    const title = tempEl.querySelector("#product_cart__title");
    const text = tempEl.querySelector("#product_cart__text");
    const price = tempEl.querySelector("#product_cart__price");

    img.src = element.imgUrl;
    title.textContent = element.name;
    text.textContent = element.text;
    price.textContent = element.price;

    cartConteiner.appendChild(tempEl);
  });
});
