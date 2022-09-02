import "./styles.css";
import { useState } from "react";

var listDB = [
  {
    name: "one two three",
    completed: true
  },
  {
    name: "four five six",
    completed: false
  },
  {
    name: "seven eight nine",
    completed: true
  }
];

export default function App() {
  var [taskName, setTaskName] = useState([]);
  var showFalseTasks = () => {
    setTaskName("");
    for (let i = 0; i < listDB.length; i++) {
      if (listDB[i].completed === false) {
        setTaskName((nameArray) => [...nameArray, listDB[i].name]);
      }
    }
  };
  var showTrueTasks = () => {
    setTaskName("");
    for (let i = 0; i < listDB.length; i++) {
      if (listDB[i].completed === true) {
        setTaskName((nameArray) => [...nameArray, listDB[i].name]);
      }
    }
  };
  return (
    <div className="App">
      <button onClick={showTrueTasks}>True Button</button>
      <button onClick={showFalseTasks}>False Button</button>
      <div>
        {taskName.map((e) => (
          <li>{e}</li>
        ))}
      </div>
    </div>
  );
}
