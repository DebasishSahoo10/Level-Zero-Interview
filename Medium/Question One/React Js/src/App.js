import { useState } from "react";
import "./styles.css";

export default function App() {
  var [input, setInput] = useState("");

  return (
    <div className="App">
      <input
        maxlength="5"
        onChange={(e) => setInput(e.target.value.trim())}
      ></input>
      <button disabled={input === ""}>Submit</button>
    </div>
  );
}
