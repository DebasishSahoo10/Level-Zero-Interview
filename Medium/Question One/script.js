var inputArea = document.querySelector('#input-area')
var submitBtn = document.querySelector('#submit-btn')



var buttonDisabler = () => {
    if (inputArea.value.trim() == "") {
        submitBtn.disabled = true
    } else {
        submitBtn.disabled = false
    }
}



inputArea.addEventListener("change", buttonDisabler)


// this app or the approach is partly sucessfull, as to properly work the event listener needs a click outside it function area (due to DOM restrictions). Do raise a PR if you have a better approach. In mean time, you can check the react solution for the same which works dynamically and doesn't have this issue.