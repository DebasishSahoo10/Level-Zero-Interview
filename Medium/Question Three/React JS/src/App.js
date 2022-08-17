import "./styles.css";
import { useState } from "react";

export default function App() {
  var [inputState, inputStateFunc] = useState("");
  var [passwordLength, passwordLengthFunc] = useState(0);

  var checkingPassword = () => {
    if (passwordLength < 10) {
      inputStateFunc("ERROR");
    } else {
      inputStateFunc("SUCCESS");
    }
  };
  return (
    <div className="App">
      <input
        type="password"
        onChange={(e) => passwordLengthFunc(e.target.value.length)}
      />
      <button onClick={checkingPassword} disabled={passwordLength < 10}>
        Check Password
      </button>
      <div>{inputState}</div>
    </div>
  );
}
