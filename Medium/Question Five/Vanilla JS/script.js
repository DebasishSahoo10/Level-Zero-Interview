var fetchBtn = document.querySelector('#fetchBtn')
var outputArea = document.querySelector('#outputArea')
var apiURL = "https://mystery-api.kushanksriraj.repl.co/get"




var fetchAPIStatus = () => {
    fetch(apiURL)
    .then(response => response.status)
    .then(status => {
        if(status == 404) {
            outputArea.innerText = "Page not found"
        } else if(status == 401) {
            outputArea.innerText = "You are not logged in"
        } else if (status == 200) {
            outputArea.innerText = "API is working"
        }
    })
}



fetchBtn.addEventListener("click", fetchAPIStatus)