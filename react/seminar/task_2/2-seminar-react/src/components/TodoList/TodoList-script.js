import { useEffect, useState } from "react";

function Todolist() {
  const [inputValue, setInputValue] = useState(""); // дело
  const [todoArr, setTodoArr] = useState([]); // массив изначально пуст

  // Обработчик изменения текста в поле ввода( сохраняем после нажатия кнопки)
  const InputChange = (event) => {
    setInputValue(event.target.value);
  };
  // сохраняем дело после нажатия
  const AddTodo = () => {
    if (inputValue.trim() === "") return;

    // Добавляем новое дело в arr и
    const newArr = [...todoArr, { inputValue, id: crypto.randomUUID() }];
    setTodoArr(newArr);
    // очищаем текстовое поле
    setInputValue("");
  };
  // Удаление задачи из списка
  const DeleteTodo = (id) => {
    const filteredArr = todoArr.filter((todo) => todo.id !== id);
    setTodoArr(filteredArr);
  };

  return (
    <div>
      <div>
        <input
          type="text"
          value={inputValue}
          onChange={InputChange}
          placeholder="Введите новое дело"
        />
        <button onClick={AddTodo}>Добавить</button>
      </div>
      {/* вывод массива */}
      <ul>
        {todoArr.map((oneTodo) => (
          <li key={oneTodo.id}>
            {oneTodo.inputValue}
            <button onClick={() => DeleteTodo(oneTodo.id)}>удалить</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Todolist;
