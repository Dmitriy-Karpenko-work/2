import { useState } from "react";

function Show() {
  const [block, setBlock] = useState();

  const blockshow = () => {
    setBlock(!block);
  };
  return (
    <div>
      <button onClick={blockshow}>показать или скрыть</button>
      <p style={{ display: block ? "block" : "none" }}>любой текст</p>
    </div>
  );
}

export default Show;
