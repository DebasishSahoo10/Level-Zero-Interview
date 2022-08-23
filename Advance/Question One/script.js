var nameInput = document.querySelector('#name-input')
var passwordInput = document.querySelector('#password-input')
var outputArea = document.querySelector('#output-area')




var checkPasswordChar = () => {
    if(passwordInput.value.includes(nameInput.value)) {
        outputArea.innerText ="Password can't have name"
    } else {
        outputArea.innerText = ""
    }
}




passwordInput.addEventListener("change", checkPasswordChar)