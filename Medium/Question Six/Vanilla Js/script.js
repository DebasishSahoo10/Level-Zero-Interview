var fetchBtn = document.querySelector('#fetch-btn')
var outputArea = document.querySelector('#output-area')



var fetchAPITitles = () => {
    fetch("https://jsonplaceholder.typicode.com/todos")
    .then (response => response.json())
    .then (json => {
        for (let i=0; i<json.length; i++) {
            var newList = document.createElement("li")
            newList.innerHTML = json[i].title
            document.body.appendChild(newList)
        }
    })
}



fetchBtn.addEventListener('click', fetchAPITitles)