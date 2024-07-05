let userList = [];
document.addEventListener("DOMContentLoaded", () => {
  userList = document.getElementById("user-list");

  // Функция для получения списка пользователей с API
  async function fetchUsers() {
    try {
      const response = await fetch(
        "https://jsonplaceholder.typicode.com/users"
      );
      const users = await response.json();
      displayUsers(users);
    } catch (error) {
      console.error("Ошибка при получении пользователей:", error);
    }
  }

  // Функция для отображения пользователей на странице
  function displayUsers(users) {
    users.forEach((user) => {
      const li = document.createElement("li");
      li.className = "user-item";
      li.innerHTML = `
                <span>${user.name}</span>
                <button onclick="removeUser(this)">Удалить</button>
            `;
      userList.appendChild(li);
    });
  }

  // Функция для удаления пользователя
  window.removeUser = function (button) {
    const userItem = button.parentElement;
    userList.removeChild(userItem);
  };

  // Получаем и отображаем пользователей при загрузке страницы
  fetchUsers();
});
