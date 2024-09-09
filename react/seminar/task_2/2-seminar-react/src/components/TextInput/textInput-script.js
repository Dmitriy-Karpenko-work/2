import { useState } from "react";

function TextInput() {
  const [text, setText] = useState(""); // ""изначальное значение
  const ChangeText = (event) => {
    setText(event.target.value);
  };
  return (
    <div>
      <input
        type="text"
        value={text}
        onChange={ChangeText}
        placeholder="write text"
      />
      <p>{text}</p>
    </div>
  );
}

export default TextInput;
