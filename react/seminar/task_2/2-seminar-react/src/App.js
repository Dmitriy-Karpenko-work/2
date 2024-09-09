import "./App.css";
import Counter from "./components/counter/counter-script";
import TextInput from "./components/TextInput/textInput-script";
import Todolist from "./components/TodoList/TodoList-script";

function App() {
  return (
    <div className="App">
      <header className="App-header">
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
        {/* <Counter />
        <TextInput /> */}
        <Todolist />
      </header>
    </div>
  );
}

export default App;
