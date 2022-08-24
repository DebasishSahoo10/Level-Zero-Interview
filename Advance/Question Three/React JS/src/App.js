import "./styles.css";
import { useState } from "react";

export default function App() {
  var [outputMessage, setOutputMessage] = useState();
  var takevalue = (e) => {
    fetch("https://mock-practice.prakhar10v.repl.co/bollywood?name=" + e)
      .then((response) => response.json())
      .then((json) => {
        setOutputMessage(json.message);
      });
  };
  return (
    <div className="App">
      <button value="YJHD" onClick={(e) => takevalue(e.target.value)}>
        YJHD
      </button>
      <button value="ZNMD" onClick={(e) => takevalue(e.target.value)}>
        ZNMD
      </button>
      <div>{outputMessage}</div>
    </div>
  );
}
