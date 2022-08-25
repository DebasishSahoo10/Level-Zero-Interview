var inputField = document.querySelector('#input-field')
var checkBtn = document.querySelector('#check-btn')
var outputField = document.querySelector('#output-field')

var taglineDatabase = [
    {
        tanvi : "she is the best CEO ever"
    },
    {
        tanay : "he is our funny mentor"
    },
    {
        swapnil : "he helps us conquer jobs"
    },
    {
        akanksha : "she is our cheerful interviwer"
    }
]

var fetchTagLine = () => {
    for (let i=0; i<taglineDatabase.length; i++) {
        if (inputField.value.toLowerCase() == Object.keys(taglineDatabase[i])) {
            outputField.innerText = Object.values(taglineDatabase[i])
        }
    }
}


checkBtn.addEventListener("click", fetchTagLine)



// "Tanvi" - then show, "She is the best CEO ever!"
// "Tanay" - then show, "He is our FUNNY mentor!"
// "Swapnil" - then show, "He helps us CONQUER jobs!"
// "Akanksha" - then show, "She is our CHEERFUL Interviewer!