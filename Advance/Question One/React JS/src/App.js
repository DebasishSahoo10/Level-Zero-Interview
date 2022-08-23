import "./styles.css";
import { useState } from "react";

export default function App() {
  var [message, setMessage] = useState("");
  var [nameInput, setNameInput] = useState("");
  var checkPassword = (e) => {
    if (e.target.value.includes(nameInput)) {
      setMessage("Password can't have name");
    } else {
      setMessage("");
    }
  };
  return (
    <div className="App">
      <input type="text" onChange={(e) => setNameInput(e.target.value)} />
      <input type="password" onChange={checkPassword} />
      <div>{message}</div>
    </div>
  );
}
