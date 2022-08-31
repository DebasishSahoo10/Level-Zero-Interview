var passwordInput = document.querySelector('#password-input')
var confirmationInput = document.querySelector('#confirmation-input')
var checkBtn = document.querySelector('#check-btn')
var outputField = document.querySelector('#output-field')


var checkInputs = () => {
    if (passwordInput.value == confirmationInput.value) {
        outputField.innerText = "Sucess"
    } else {
        outputField.innerText = "Passwords Mismatched"
    }
}


checkBtn.addEventListener('click', checkInputs)