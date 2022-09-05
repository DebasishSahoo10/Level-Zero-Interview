var passwordInput = document.querySelector('#password-input')
var checkBtn = document.querySelector('#check-btn')
var outputArea = document.querySelector('#output-area')


function passwordChecker () {
  if (passwordInput.value.length < 10) {
    outputArea.innerText = "Your password has to be more than 10 characters."
  } else {
    outputArea.innerText = "Your password is all fine."
  }
}

function buttonStateEnabler () {
  if (passwordInput.value.length < 10) {
    checkBtn.disabled = true;
    passwordInput.style.borderColor = "red";
  } else {
    checkBtn.disabled = false;
    passwordInput.style.borderColor = "green";
  }
}

checkBtn.disabled = true;
passwordInput.style.borderColor = "red";
checkBtn.addEventListener("click", passwordChecker)
passwordInput.addEventListener("change", buttonStateEnabler)
