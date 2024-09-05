import "./style.css";

function CurrentTime() {
  const now = new Date();
  const formattedTime = now.toLocaleTimeString();

  return (
    <div className="current-time-container">
      <h2>Текущее время: {formattedTime}</h2>
      <h1 className="current-time-advertisement">
        тут могла быть ваша реклама
      </h1>
    </div>
  );
}

export default CurrentTime;
