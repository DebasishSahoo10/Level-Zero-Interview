import "./styles.css";
import { useState } from "react";

export default function App() {
  var [currentPrice, setCurrentPrice] = useState();
  var [costPrice, setCostPrice] = useState();
  var [output, setOutput] = useState("");
  var checkPNL = () => {
    if (Number(currentPrice) > Number(costPrice)) {
      setOutput(`You are making profit of ${currentPrice - costPrice}`);
    } else {
      setOutput(`Oops !! you are on a loss of ${costPrice - currentPrice}`);
    }
  };
  return (
    <div className="App">
      <input
        type="number"
        placeholder="Input Current Price"
        onChange={(e) => setCurrentPrice(e.target.value)}
      />
      <input
        type="number"
        placeholder="Input Cost Price"
        onChange={(e) => setCostPrice(e.target.value)}
      />
      <button onClick={checkPNL}>Check Profit/Loss</button>
      <div>{output}</div>
    </div>
  );
}
