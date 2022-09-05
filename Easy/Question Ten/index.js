var apiCallBtn = document.querySelector('#api-call-btn')
var outputDiv = document.querySelector('#output-div')
var apiURL = "https://jsonplaceholder.typicode.com/dummyUsers"


function callAPI () {
  fetch(apiURL)
  .then (error => {
        if (error.status == 404) {
          outputDiv.innerText = "Page not found."
        } else if (error.status == 401) {
          outputDiv.innerText = "User not logged in."
        }
  })
}




apiCallBtn.addEventListener("click", callAPI)
