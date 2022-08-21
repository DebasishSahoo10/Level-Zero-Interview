var fetchBtn = document.querySelector('#fetchBtn')
var messageDisplay = document.querySelector('#message-display')
var statusDisplay = document.querySelector('#status-display')
var apiURL = "https://quick-access-api.desaihetav.repl.co/"

var fetchAPIData = () => {
    fetch(apiURL)
    .then(response => response.json())
    .then(json => {
        messageDisplay.innerText = json.message
        statusDisplay.innerText = json.success
    })
}

fetchBtn.addEventListener("click", fetchAPIData)