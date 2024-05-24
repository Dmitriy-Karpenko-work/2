$(document).ready(function () {
  const wraperCatalogEl = $(".frameOne__catalog"); // Обернем wraperCatalogEl в jQuery-объект

  // Функция для применения фильтров и отображения карточек продуктов
  const applyFiltersAndDisplayProducts = () => {
    const brandFilter = $("#brandFilter").val();
    const categoryFilter = $("#categoryFilter").val();
    const priceRanges = $("input[name='priceRange']:checked")
      .map(function () {
        return this.value.split("-").map(Number);
      })
      .get();
    // Фильтруем массив данных
    const filteredProducts = tempArr.filter(function (product) {
      return (
        (!brandFilter || product.brand === brandFilter) &&
        (!categoryFilter || product.category === categoryFilter) &&
        (!priceRanges.length ||
          priceRanges.some(function (range) {
            return product.price >= range[0] && product.price <= range[1];
          }))
      );
    });

    // Очищаем существующие карточки перед отображением новых
    wraperCatalogEl.empty(); // Теперь wraperCatalogEl является объектом jQuery и метод .empty() будет работать

    // Отображаем отфильтрованные продукты
    filteredProducts.forEach(function (product) {
      DisplayProductCart(product);
    });

    // Предотвращаем обновление страницы
    return false;
  };

  // Обработчик события для кнопки "Применить фильтр"
  $(".filter__buttonApply").click(function (event) {
    event.preventDefault(); // Предотвращаем обновление страницы
    applyFiltersAndDisplayProducts();
  });

  // Обработчик события для кнопки "Сброс"
  $(".filter__buttonReset").click(function (event) {
    event.preventDefault(); // Предотвращаем обновление страницы
    // Сбрасываем все фильтры при нажатии кнопки "Сброс"
    $("#brandFilter").val("");
    $("#categoryFilter").val("");
    $("input[name='priceRange']").prop("checked", false);
    applyFiltersAndDisplayProducts(); // Применяем фильтры после сброса

    // Предотвращаем обновление страницы
    return false;
  });
});
