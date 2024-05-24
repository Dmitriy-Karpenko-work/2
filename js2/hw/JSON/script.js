const productEl = document.createElement("div");
productEl.classList.add("product");

const productImg = document.createElement("img");
productImg.classList.add("product__img");
productImg.setAttribute("alt", Productdata.alt);
productImg.src = Productdata.src;

const productContent = document.createElement("div");
productContent.classList.add("product__content");

const productName = document.createElement("a");
productName.setAttribute("href", Productdata.link);
productName.innerHTML = Productdata.name;
productName.classList.add("product__name");

const productText = document.createElement("p");
productText.innerHTML = Productdata.description;
productText.classList.add("product__text");

const productPrice = document.createElement("p");
productPrice.classList.add("product__price");
productPrice.innerHTML = Productdata.price;

productEl.appendChild(productImg);
productEl.appendChild(productContent);

productContent.appendChild(productName);

productContent.appendChild(productText);
productContent.appendChild(productPrice);

productBox.appendChild(productEl);
