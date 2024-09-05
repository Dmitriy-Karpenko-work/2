import logo from "./logo.svg";
import "./App.css";

function App() {
  const userName = "Dima";
  return (
    <div>
      <h1>Hello {userName}</h1>
      <Article number="3" name="info" />
      <Article number="5" name="blog" />
    </div>
  );
}
function Article({ name, number }) {
  return (
    <div>
      <h2 className="heading">
        статья про {name} ногмер {number}
      </h2>
      <a href="#">читатьь статью</a>
    </div>
  );
}

export default App;
