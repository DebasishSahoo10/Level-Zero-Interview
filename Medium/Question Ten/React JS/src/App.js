import "./styles.css";
import { useState } from "react";

export default function App() {
  var [firstInputValue, firstInputFunc] = useState("");
  var [secondInputValue, secondInputFunc] = useState("");

  return (
    <div className="App">
      <input
        type="password"
        onChange={(e) => firstInputFunc(e.target.value)}
      ></input>
      <input
        type="password"
        onChange={(e) => secondInputFunc(e.target.value)}
      ></input>
      <button disabled={firstInputValue !== secondInputValue}>
        Submit Password
      </button>
    </div>
  );
}
