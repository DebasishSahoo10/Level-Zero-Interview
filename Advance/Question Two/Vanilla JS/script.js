var fetchBtn = document.querySelector('#fetch-btn')
var apiURL = 'https://mock-practice.prakhar10v.repl.co/items'
var outputArea = document.querySelector('#output-area')


var fetchAPIData = () => {
    var maxPrice = 0
    fetch(apiURL)
    .then(Response => Response.json())
    .then(json => {
        for (let i=0; i<json.length; i++) {
            if (json[i].price > maxPrice) {
              maxPrice = json[i].price
              var productName = json[i].item
            }
        }
        outputArea.innerText = productName

    })
}





fetchBtn.addEventListener("click", fetchAPIData)