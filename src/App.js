import logo from "./logo.svg";
import "./App.css";
import { useState } from "react";
import Child from "./child";
import { createContext } from "react";

function App() {
  const CONTEXT = createContext();
  const [count, setCount] = useState(0);
  const value = { count, setCount };
  function handleAdd() {
    setCount(count + 1);
  }
  return (
    <div className="App">
      <h1>The counter app</h1>
      <h3>{count}</h3>
      <button onClick={handleAdd}>+</button>
      <CONTEXT.Provider value={value}>
        <Child />
      </CONTEXT.Provider>
    </div>
  );
}

export default App;
