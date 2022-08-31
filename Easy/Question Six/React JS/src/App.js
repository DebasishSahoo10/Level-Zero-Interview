import "./styles.css";
import { useState } from "react";

export default function App() {
  var [password, setPassword] = useState("");
  var [confirmation, setConfirmation] = useState("");
  var [output, setOutput] = useState("");
  var checkTheInputs = () => {
    if (password === confirmation) {
      setOutput("Sucess");
    } else {
      setOutput("Passwords Mismatched");
    }
  };
  return (
    <div className="App">
      <input type="text" onChange={(e) => setPassword(e.target.value)} />
      <input type="text" onChange={(e) => setConfirmation(e.target.value)} />
      <button onClick={checkTheInputs}>Check the Password</button>
      <div>{output}</div>
    </div>
  );
}
