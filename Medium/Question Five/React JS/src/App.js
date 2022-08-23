import "./styles.css";
import { useState } from "react";

export default function App() {
  var [output, setOutput] = useState("");
  var fetchAPIData = () => {
    fetch("https://mystery-api.kushanksriraj.repl.co/get")
      .then((response) => response.status)
      .then((status) => {
        if (status === 404) {
          setOutput("Page not Found");
        } else if (status === 401) {
          setOutput("You are not logged in");
        } else if (status === 200) {
          setOutput("API is working");
        }
      });
  };
  return (
    <div className="App">
      <button onClick={fetchAPIData}>Fetch API Status</button>
      <div>{output}</div>
    </div>
  );
}
