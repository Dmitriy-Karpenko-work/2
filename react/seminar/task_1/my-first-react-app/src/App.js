import logo from "./logo.svg";
import "./App.css";
import Greating from "./component/greating";
import CurrentTime from "./component/time/currentTime.js";
import EventCard from "./component/EventCard/EventCard.js";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Greating />
        <CurrentTime />
      </header>
      <div className="wrapper">
        <h1>Предстоящие события</h1>

        <EventCard
          title="семинар React"
          date="2 сентября 2024"
          location="livedigital"
        />
        <EventCard
          title="шуфутинский"
          date="3 сентября 2024"
          location="Москва, Лужники"
        />
        <EventCard
          title="Фестиваль современного искусства"
          date="4 сентября 2024"
          location="Воркута"
        />
      </div>
    </div>
  );
}

export default App;
