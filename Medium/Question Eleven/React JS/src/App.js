import "./styles.css";
import { useState } from "react";

// Create a select drop down menu with every month in it and show no of days in that month when something is selected

var month = {
  January: "31",
  February: "28",
  March: "31",
  April: "30",
  May: "31",
  June: "30",
  July: "31",
  August: "31",
  September: "30"
};

var monthNames = Object.keys(month);

export default function App() {
  var [days, setDays] = useState();
  var fetchDays = (e) => {
    setDays(month[e]);
  };
  return (
    <div className="App">
      <form>
        <lable>Select Month</lable>
        <select onChange={(e) => fetchDays(e.target.value)}>
          {monthNames.map((e) => (
            <option key={e}>{e}</option>
          ))}
        </select>
      </form>
      <div>{days}</div>
    </div>
  );
}
