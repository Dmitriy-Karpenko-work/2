import logo from "./logo.svg";
import "./App.css";
import Counter from "./components/counter/counter-script";
import TextInput from "./components/text/TextInput";
import Show from "./components/show/show-script";
import TodoList from "./components/todo/todo";
import Timer from "./components/timer/timer";
function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer">
          Learn React
        </a>
        {/* <Counter></Counter>
        <TextInput></TextInput> */}
        {/* <Show /> */}
        {/* <TodoList /> */}
        <Timer />
      </header>
    </div>
  );
}

export default App;
