import "./styles.css";
import { useState } from "react";

export default function App() {
  var [inputValue, setInputValue] = useState();
  var [outputValue, setOutputValue] = useState();

  var database = [
    {
      tanvi: "She is the best CEO ever!"
    },
    {
      tanay: "He is our FUNNY mentor!"
    },
    {
      swapnil: "He helps us CONQUER jobs!"
    },
    {
      akanksha: "She is our CHEERFUL Interviewer!"
    }
  ];

  var inputValueMatch = () => {
    for (let i = 0; i < database.length; i++) {
      if (inputValue === Object.keys(database[i]).toString()) {
        setOutputValue(Object.values(database[i]));
      }
    }
  };
  return (
    <div className="App">
      <input
        type="text"
        onChange={(e) => setInputValue(e.target.value.toLowerCase())}
      />
      <button onClick={inputValueMatch}>Input Button</button>
      <div>{outputValue}</div>
    </div>
  );
}
