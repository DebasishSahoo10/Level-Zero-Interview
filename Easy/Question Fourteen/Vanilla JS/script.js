var inputOne = document.querySelector('#number-input-one');
var inputTwo = document.querySelector('#number-input-two');
var plusBtn = document.querySelector('#plus-btn');
var minusBtn = document.querySelector('#minus-btn');
var multiplyBtn = document.querySelector('#multiply-btn');
var divisionBtn = document.querySelector('#division-btn');
var outputArea = document.querySelector('#output-area')




function addValues () {
    var sum = Number(inputOne.value) + Number(inputTwo.value);
    outputArea.innerText = sum;
}

function substractValues () {
    var substract = Number(inputOne.value) - Number(inputTwo.value);
    outputArea.innerText = substract;
}

function multiplyValues () {
    var multiply = Number(inputOne.value) * Number(inputTwo.value);
    outputArea.innerText = multiply;
}

function divideValues () {
    var division = Number(inputOne.value) / Number(inputTwo.value);
    outputArea.innerText = division;
}






plusBtn.addEventListener("click", addValues);
minusBtn.addEventListener("click", substractValues);
multiplyBtn.addEventListener("click", multiplyValues);
divisionBtn.addEventListener("click", divideValues);