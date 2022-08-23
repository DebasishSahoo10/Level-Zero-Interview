import "./styles.css";
import { useState } from "react";

export default function App() {
  var [productName, setProductname] = useState("");

  var fetchAPIData = () => {
    fetch("https://mock-practice.prakhar10v.repl.co/items")
      .then((response) => response.json())
      .then((json) => {
        var itemWithHighestPrice = json[0];
        for (let i = 1; i < json.length; i++) {
          if (json[i].price > itemWithHighestPrice.price) {
            itemWithHighestPrice = json[i];
          }
        }
        setProductname(itemWithHighestPrice.item);
      });
  };
  return (
    <div className="App">
      <button onClick={fetchAPIData}>Fetch Data</button>
      <div>{productName}</div>
    </div>
  );
}
