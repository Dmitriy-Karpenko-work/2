import { useState } from "react";

function Counter() {
  const [count, setCount] = useState(0);
  const updateCount = () => {
    setCount(count + 1);
  };
  return (
    <div>
      <button onClick={updateCount}>кнопка +1</button>
      <p>{count}</p>
    </div>
  );
}

export default Counter;
