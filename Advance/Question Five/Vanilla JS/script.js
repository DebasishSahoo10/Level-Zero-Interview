var inputField = document.querySelector('#input-field')
var testBtn = document.querySelector('#test-btn')
var outputField = document.querySelector('#output-field')





var testTheNumber = () => {
    var square = Math.pow((inputField.value), 2)
    var lastDigitSquare = String(square).slice(-1)
    var lastDigitInput = (inputField.value).slice(-1)
    if (Number(lastDigitInput) == Number(lastDigitSquare)) {
        outputField.innerText = "automorphic number"
    } else {
        outputField.innerText = "NOT anautomorphic number"
    }
}



testBtn.addEventListener('click', testTheNumber)