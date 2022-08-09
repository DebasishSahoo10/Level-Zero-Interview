// Build a counter application and then some questions were asked related to the coding part

var counterHolder = document.querySelector("#counter-holder")
var increaseBtn = document.querySelector("#increase-btn")
var decreaseBtn = document.querySelector("#decrease-btn")


var counterValue = 0;

var increaseCounter = () => {
    counterValue = counterValue + 1
    counterHolder.innerHTML = (counterValue)
}

var decreaseCounter = () => {
    if (counterValue == 0) {
        counterHolder.innerText = 0
    } else {
        counterValue = counterValue - 1
        counterHolder.innerHTML = (counterValue)
    }
    
}




increaseBtn.addEventListener("click", increaseCounter)
decreaseBtn.addEventListener("click", decreaseCounter)