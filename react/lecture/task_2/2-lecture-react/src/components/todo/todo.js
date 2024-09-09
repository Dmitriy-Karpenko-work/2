import React, { useState } from "react";

function TodoList() {
  //хранения
  const [todos, setTodos] = useState([]);

  // Состояние для хранения
  const [newTodo, setNewTodo] = useState("");

  // Обработчик изменения текста в поле ввода
  const handleChange = (event) => {
    setNewTodo(event.target.value);
  };

  // Обработчик добавления нового дела в список
  const handleAddTodo = () => {
    if (newTodo.trim() === "") return; // Не добавляем пустые строки

    setTodos([...todos, newTodo]); // Добавляем новый элемент в список
    setNewTodo(""); // Очищаем поле ввода
  };

  return (
    <div>
      <h1>Список дел</h1>
      <input
        type="text"
        value={newTodo}
        onChange={handleChange}
        placeholder="Введите новое дело"
      />
      <button onClick={handleAddTodo}>Добавить</button>

      <ul>
        {todos.map((todo, index) => (
          <li key={index}>{todo}</li>
        ))}
      </ul>
    </div>
  );
}

export default TodoList;
