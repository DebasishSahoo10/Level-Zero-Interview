var inputText = document.querySelector('#input-text')
var buttonSmall = document.querySelector('#btn-small')
var buttonLarge = document.querySelector('#btn-large')



let fontValue = 2;

function reduceFontSize () {
    fontValue -= 1;
    inputText.style.fontSize = `${fontValue}rem`
}

function incrementFontSize () {
    fontValue += 1;
    inputText.style.fontSize = `${fontValue}rem`
}





buttonSmall.addEventListener("click", reduceFontSize)
buttonLarge.addEventListener("click", incrementFontSize)