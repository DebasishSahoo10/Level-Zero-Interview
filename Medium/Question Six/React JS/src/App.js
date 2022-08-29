import "./styles.css";
import { useState } from "react";

export default function App() {
  var [tittles, setTittles] = useState([]);
  var fetchAPIData = () => {
    fetch("https://jsonplaceholder.typicode.com/todos")
      .then((response) => response.json())
      .then((json) => {
        for (let i = 0; i < json.length; i++) {
          setTittles((newTittle) => [...newTittle, `${json[i].title}`]);
        }
      });
  };
  return (
    <div className="App">
      <button onClick={fetchAPIData}>Fetch Tittles</button>
      <div>
        {tittles.map((e) => (
          <li>{e}</li>
        ))}
      </div>
    </div>
  );
}
