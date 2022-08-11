import "./styles.css";
import {useState} from 'react'

export default function App() {

  var [completedTask, setCompletedTask] = useState([])
  var URL = "https://jsonplaceholder.typicode.com/todos"

  var fetchFunc = () => {
    fetch(URL)
    .then (response => response.json())
    .then (json => {
      for (let i=0; i<json.length; i++) {
        if (json[i].completed === true) {
          setCompletedTask((newList) => [...newList, json[i].title]
          )
      }
    }
  })
  }

  return (
    <div className="App">
     <button onClick = {fetchFunc}>Fetch IT ALL</button>
      <div>{completedTask.map((e) => (
        <li>{e}</li>
      ))}</div>
    </div>
  );
}
