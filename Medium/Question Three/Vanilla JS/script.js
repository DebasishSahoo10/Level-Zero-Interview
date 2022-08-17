// Create a password checker web app. If password is less than 10 characters then show an error to user otherwise show success. 


var passwordInput = document.querySelector('#password-input')
var checkBtn = document.querySelector("#check-btn")
var outputArea = document.querySelector('#output-area')






var checkPasswordLength = () => {
    if (passwordInput.value.length < 10) {
        console.log("part")
        outputArea.innerText = "ERROR"
        outputArea.style.color ="red"
    } else {
        outputArea.innerText = "SUCCESS"
        outputArea.style.color = "green"
    }
}



var buttonActivater = () => {
    if (passwordInput.value.trim().length < 10) {
        checkBtn.disabled = true
    } else {
        checkBtn.disabled = false
    }
}



checkBtn.addEventListener("click", checkPasswordLength)
passwordInput.addEventListener("change", buttonActivater)