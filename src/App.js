import logo from "./logo.svg";
import "./App.css";
import { useState } from "react";

function App() {
  const [count, setCount] = useState(0);
  function handleAdd() {
    setCount(count + 1);
  }
  return (
    <div className="App">
      <h1>The counter app</h1>
      <h3>{count}</h3>
      <button onClick={handleAdd}>+</button>
    </div>
  );
}

export default App;
