// a program to take input number from user and print a star pattern. Can you print the same inverted?

var input = document.querySelector('#input')
var submitBtn = document.querySelector('#submit-btn')
var outputField = document.querySelector('#output-field')
var submitBtnInverted = document.querySelector('#submit-btn-inverted')
var outputFieldInverted = document.querySelector('#output-field-inverted')


var printStars = () => {
    var star = ''
    for (let i=0; i<Number(input.value); i++){
        star = star + "*"
        var starArea = document.createElement("p")
        starArea.innerText = star
        document.body.appendChild(starArea)

    }
}

var printStarsInverted = () => {
    for (let i=0; i<Number(input.value); i++) {
        var starNew = ''
        for (j=0; j<(Number(input.value) - i); j++){
            starNew = starNew + '*'
        }
        var invertedStar = document.createElement("p")
        invertedStar.innerText = starNew
        document.body.appendChild(invertedStar)
    }
}


submitBtn.addEventListener('click', printStars)
submitBtnInverted.addEventListener('click', printStarsInverted)