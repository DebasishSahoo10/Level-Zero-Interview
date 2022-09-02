import "./styles.css";
import { useState } from "react";

export default function App() {
  var [outputList, setOutputList] = useState([]);
  var fetchAPI = () => {
    setOutputList([]);
    fetch("https://stock-api.desaihetav.repl.co/list")
      .then((response) => response.json())
      .then((json) => {
        setOutputList(json.data);
      });
  };
  return (
    <div className="App">
      <button onClick={fetchAPI}>Show API Data</button>
      <div>
        {outputList.map((e) => (
          <li key={e.id}>
            {e.id} with name as {e.name}{" "}
          </li>
        ))}
      </div>
    </div>
  );
}
