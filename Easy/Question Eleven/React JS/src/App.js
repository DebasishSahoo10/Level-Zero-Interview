import "./styles.css";
import { useState } from "react";

export default function App() {
  var [date, setDate] = useState();
  var [age, setAge] = useState();
  var ageFunction = () => {
    var birthYearSplit = date.split("-");
    var birthYear = birthYearSplit[0];
    var currentDate = new Date();
    var currentYear = currentDate.getFullYear();
    var userAge = Number(currentYear) - Number(birthYear);
    setAge(userAge);
  };
  return (
    <div className="App">
      <input type="date" onChange={(e) => setDate(e.target.value)} />
      <button onClick={ageFunction}>Check Age</button>
      <div>{age}</div>
    </div>
  );
}
