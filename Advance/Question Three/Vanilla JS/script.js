var btnYJHD = document.querySelector('#btnYJHD')
var outputField = document.querySelector('#output-field')
var btnZNMD = document.querySelector('#btnZNMD')


var fetchAPIData = (e) => {
    fetch("https://mock-practice.prakhar10v.repl.co/bollywood?name=" + e)
    .then(response => response.json())
    .then(json => outputField.innerText = json.message)
}


btnYJHD.addEventListener("click", () => {
    fetchAPIData(btnYJHD.value)
})
btnZNMD.addEventListener("click", () => {
    fetchAPIData(btnZNMD.value)
})