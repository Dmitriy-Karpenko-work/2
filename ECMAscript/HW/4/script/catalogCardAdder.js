function addUser() {
  tempArr.forEach((element) => {
    CatalogEl.insertAdjacentHTML(
      "beforeend",
      `
                <div class="catalog__cart cart">
                        <div class="cart__id">
                            <span>id ${element.id}</span>
                    </div>
                        <div class="cart__nickname">
                            <span>nickname ${element.username}</span>
                    </div>
                        <div class="cart__name">
                            <span>имя ${element.name}</span>
                    </div>
                        <div class="cart__phone">
                        <div><span> номер телефона</span></div>
                            <span>${element.phone.split("x")[0]}</span>
                    </div>
                        <div class="cart__email">
                            <a href="http://${
                              element.website
                            }">ссылка на сайт</a>
                    </div>
                        <div class="cart__close">
                        <svg width="20px" height="20px"
                         viewBox="0 0 36 36"
                          xmlns="http://www.w3.org/2000/svg"
                           xmlns:xlink="http://www.w3.org/1999/xlink"
                            aria-hidden="true" role="img"
                             class="iconify iconify--twemoji"
                              preserveAspectRatio="xMidYMid meet"><path fill="#DD2E44" d="M21.533 18.002L33.768 5.768a2.5 2.5 0 0 0-3.535-3.535L17.998 14.467L5.764 2.233a2.498 2.498 0 0 0-3.535 0a2.498 2.498 0 0 0 0 3.535l12.234 12.234L2.201 30.265a2.498 2.498 0 0 0 1.768 4.267c.64 0 1.28-.244 1.768-.732l12.262-12.263l12.234 12.234a2.493 2.493 0 0 0 1.768.732a2.5 2.5 0 0 0 1.768-4.267L21.533 18.002z"></path></svg>
                        </div>
                </div>;
                

                            


            `
    );
  });
}
