import "./styles.css";
import { useState } from "react";

// Create a web app and render your name using any heading or paragraph tag. It should have a border of 1px around it. Create 2 buttons, '5px' and '10px' below your name. The width of border should change to 5px and 10px by clicking respective buttons.

export default function App() {

  var [borderWidth, setBorderWidth] = useState()

  var text10PX = () => {
    setBorderWidth({ borderWidth: 10 })
  };

  var text5PX = () => {
    setBorderWidth({ borderWidth: 5 })
  };

  return (
    <div className="App">
      <h1 style={borderWidth}>Dev Here</h1>
      <button onClick={text5PX}>5PX</button>
      <button onClick={text10PX}>10PX</button>
    </div>
  );
}
