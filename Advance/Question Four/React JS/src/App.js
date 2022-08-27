import "./styles.css";
import { useState } from "react";

export default function App() {
  var [name, setName] = useState("");
  var [guessOTP, setGuessOTP] = useState();
  var [otp, setOTP] = useState();
  var [output, setOutput] = useState();
  var [color, setColor] = useState();
  var getOTP = () => {
    fetch("https://otpgenerator.ishanjirety.repl.co/get-otp?name=" + name)
      .then((response) => response.json())
      .then((json) => {
        var OTP = parseInt(json.otp.replace(/[^0-9]/g, ""), 10);
        setOTP(OTP);
      });
  };
  var validateOTP = () => {
    if (Number(otp) === Number(guessOTP)) {
      setOutput("Sucess");
      setColor("green");
    } else {
      setOutput("Failure");
      setColor("red");
    }
  };
  return (
    <div className="App">
      <div className="App">
        <input type="text" onChange={(e) => setName(e.target.value)} />
        <button onClick={getOTP}>Get OTP</button>
        <input
          type="number"
          placeholder="Guess the OTP"
          onChange={(e) => setGuessOTP(e.target.value)}
        />
        <button onClick={validateOTP}>Validate</button>
        <h1 style={{ color: color }}>{output}</h1>
      </div>
    </div>
  );
}
