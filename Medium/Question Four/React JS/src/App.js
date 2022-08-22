import "./styles.css";
import {useState} from 'react'


export default function App() {

  var [userInput, setUserInput] = useState()
  var [outputColor, setOutputColor] = useState("")
  var [outputHold, setOutputHold] = useState()

  var inputValue = (e) => {
   setOutputHold(e.target.value)
  }

  var logColor = () => {
    setUserInput(outputHold)
    setOutputColor("black")
    console.log(outputColor)
  }

  var warnColor = () => {
    setUserInput(outputHold)
    setOutputColor("yellow")
  }

  var errorColor = () => {
    setUserInput(outputHold)
    setOutputColor("red")
  }

  return (
    <div className="App">
      <input type="text" onChange={inputValue}/>
      <button onClick={logColor}>Log</button>
      <button onClick={warnColor}>Warn</button>
      <button onClick={errorColor}>Error</button>
      <div style={{color : outputColor}}>{userInput}</div>
    </div>
  );
}
