var passwordInput = document.querySelector('#password-input')
var confirmationInput = document.querySelector('#confirmation-input')
var checkBtn = document.querySelector('#check-button')




var disbaleButton = () => {
    if (passwordInput.value == confirmationInput.value) {

        checkBtn.disabled = false

    } else {

        checkBtn.disabled = true

    }
}



passwordInput.addEventListener('change', disbaleButton)
confirmationInput.addEventListener("change", disbaleButton)