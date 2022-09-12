var initialText = document.querySelector('#initial-text')
var h1Btn = document.querySelector('#h1-btn')
var h2Btn = document.querySelector('#h2-btn')
var h3Btn = document.querySelector('#h3-btn')
var outputArea = document.querySelector('#output-area')



function makeTextH1 () {
    outputArea.innerHTML = `<h1>${initialText.value}</h1>`;
}

function makeTextH2 () {
    outputArea.innerHTML = `<h2>${initialText.value}</h3>`;
}

function makeTextH3 () {
    outputArea.innerHTML = `<h3>${initialText.value}</h3>`;
}



h1Btn.addEventListener("click", makeTextH1)
h2Btn.addEventListener("click", makeTextH2)
h3Btn.addEventListener("click", makeTextH3)