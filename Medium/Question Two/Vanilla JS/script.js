// Fetch an API ( https://jsonplaceholder.typicode.com/todos ) and display it on the output on screen.

var URL = "https://jsonplaceholder.typicode.com/todos"
var fetchBtn = document.querySelector('#fetch-btn')



var fetchAPIData = () => {
    fetch(URL)
    .then (response => response.json())
    .then (json => {
        for (let i=0; i<json.length; i++) {
            if (json[i].completed = true) {
                var completedList = document.createElement("li")
                completedList.innerText = json[i].title
                document.body.appendChild(completedList)

            }
        }
    })
}



fetchBtn.addEventListener("click", fetchAPIData)