import React, { useState } from "react";

function TextInput() {
  // Создание состояния для хранения текста
  const [text, setText] = useState("");

  // Обработчик изменения текста в поле ввода
  const handleChange = (event) => {
    setText(event.target.value);
  };

  return (
    <div>
      <input
        type="text"
        value={text}
        onChange={handleChange}
        placeholder="Введите текст"
      />
      <p>Вы ввели: {text}</p>
    </div>
  );
}

export default TextInput;
