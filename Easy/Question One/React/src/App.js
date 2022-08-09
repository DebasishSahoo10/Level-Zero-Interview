import "./styles.css";
import { useState } from "react";

export default function App() {
  var [counter, counterFunc] = useState(0);

  return (
    <div className="App">
      <div>{counter}</div>
      <button
        onClick={() => {
          counterFunc(counter + 1);
        }}
      >
        Increase
      </button>
      <button
        onClick={() => {
          if (counter === 0) {
            counterFunc(0);
          } else {
            counterFunc(counter - 1);
          }
        }}
      >
        Decrease
      </button>
    </div>
  );
}
