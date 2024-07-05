// Функция для получения статей из локального хранилища
function getArticlesFromLocalStorage() {
  let articles = localStorage.getItem("articles");
  return articles ? JSON.parse(articles) : [];
}

// Функция для сохранения статей в локальное хранилище
function saveArticlesToLocalStorage(articles) {
  localStorage.setItem("articles", JSON.stringify(articles));
}

// Функция для отрисовки списка статей на странице
function renderArticles(articles) {
  const articlesList = document.getElementById("articlesList");
  articlesList.innerHTML = "";

  articles.forEach((article, index) => {
    const articleHTML = `
            <div class="card mb-3">
                <div class="card-body">
                    <h2 class="card-title">${article.title}</h2>
                    <p class="card-text">${article.content}</p>
                    <button type="button" class="btn btn-primary edit-article-btn" data-index="${index}" data-toggle="modal" data-target="#editArticleModal">
                        Редактировать
                    </button>
                </div>
            </div>
        `;
    articlesList.innerHTML += articleHTML;
  });
}

// Инициализация страницы
document.addEventListener("DOMContentLoaded", function () {
  let articles = getArticlesFromLocalStorage();

  // Отрисовка начального списка статей
  renderArticles(articles);

  // Обработчик кнопки "Добавить статью"
  document
    .getElementById("addArticleButton")
    .addEventListener("click", function () {
      const newArticle = {
        title: "Новая статья",
        content: "Введите содержание статьи...",
      };
      articles.push(newArticle);
      saveArticlesToLocalStorage(articles);
      renderArticles(articles);
    });

  // Обработчик кнопки "Удалить"
  document
    .getElementById("deleteArticleButton")
    .addEventListener("click", function () {
      if (articles.length > 0) {
        articles.pop();
        saveArticlesToLocalStorage(articles);
        renderArticles(articles);
      }
    });

  // Обработчик кнопки "Сохранить изменения" в модальном окне
  document
    .getElementById("saveChangesButton")
    .addEventListener("click", function () {
      const index = parseInt(
        document.getElementById("editArticleModal").dataset.index,
        10
      );
      const editedTitle = document.getElementById("editArticleTitle").value;
      const editedContent = document.getElementById("editArticleContent").value;

      articles[index].title = editedTitle;
      articles[index].content = editedContent;
      saveArticlesToLocalStorage(articles);
      renderArticles(articles);
      $("#editArticleModal").modal("hide"); // Закрываем модальное окно
    });

  // Обработчик клика на кнопку "Редактировать"
  document.addEventListener("click", function (event) {
    if (event.target.classList.contains("edit-article-btn")) {
      const index = parseInt(event.target.dataset.index, 10);
      const article = articles[index];
      document.getElementById("editArticleTitle").value = article.title;
      document.getElementById("editArticleContent").value = article.content;
      document.getElementById("editArticleModal").dataset.index = index;
    }
  });
});
