var stockName = document.querySelector('#stock-name')
var boughtPrice = document.querySelector('#buy-price')
var fetchBtn = document.querySelector('#fetch-btn')
var outputArea = document.querySelector('#output-message')

var URL = "https://api.polygon.io/v2/aggs/ticker/"

var apiGenerator = (e) => {
    return URL + (e) + "/prev" + "?" + "adjusted=true&apiKey=Dff86YWVHmg068EIAfR_xlZZ2CyMKnwS"
}

var getchAPIData = () => {
    fetch(apiGenerator(stockName.value.toUpperCase()))
    .then(response => response.json())
    .then(json => {
        if (json.results[0].c > boughtPrice.value) {
            outputArea.innerText = "You are sitting on a Profit."
            outputArea.style.color = "green"
        } else {
            outputArea.innerText = "You are under a Loss"
            outputArea.style.color = "red"
        }
    })
    .catch(error = () => {outputArea.innerText = "Oops!some error occurred. Try again after some time."})

}



fetchBtn.addEventListener("click", getchAPIData)