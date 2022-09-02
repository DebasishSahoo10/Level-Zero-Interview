var fetchBtn = document.querySelector('#fetch-btn')
var URL = "https://stock-api.desaihetav.repl.co/list"


var FetchAPICall = () => {
    fetch(URL)
    .then (response => response.json())
    .then (json => {
        for (let i=0; i<json.data.length; i++) {
            var listArea = document.createElement("li")
            listArea.innerHTML = `${json.data[i].id} having name ${json.data[i].name}`
            document.body.appendChild(listArea)
        }
    })
}



fetchBtn.addEventListener("click", FetchAPICall)