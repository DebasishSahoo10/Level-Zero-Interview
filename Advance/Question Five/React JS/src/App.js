import "./styles.css";
import { useState } from "react";

export default function App() {
  var [input, setInput] = useState();
  var [output, setOutput] = useState();
  var testTheNumber = () => {
    var square = Math.pow(input, 2);
    var lastDigitSquare = String(square).slice(-1);
    var lastDigitInput = input.slice(-1);
    if (Number(lastDigitInput) === Number(lastDigitSquare)) {
      setOutput("Yes, it is an automorphic number");
    } else {
      setOutput("No, it is NOT an automorphic number");
    }
  };
  return (
    <div className="App">
      <input type="number" onChange={(e) => setInput(e.target.value)} />
      <button onClick={testTheNumber}>Test the number</button>
      <div>{output}</div>
    </div>
  );
}
