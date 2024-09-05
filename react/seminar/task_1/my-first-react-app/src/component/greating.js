import "./style.css";

function Greeting() {
  const currentHour = new Date().getHours() + 1;
  let greetingMessage;
  let className;

  if (currentHour < 6) {
    greetingMessage = "Доброе ночи";
    className = "night";
  } else if (currentHour < 12) {
    greetingMessage = "Доброе утро";
    className = "morning";
  } else if (currentHour < 18) {
    greetingMessage = "Добрый день";
    className = "day";
  } else if (currentHour < 22) {
    greetingMessage = "Добрый вечер";
    className = "evening";
  } else {
    greetingMessage = "Доброй ночи";
    className = "night";
  }

  return (
    <div className={`greeting-container ${className || ""}`}>
      <h1>{greetingMessage}, React!</h1>
    </div>
  );
}

export default Greeting;
