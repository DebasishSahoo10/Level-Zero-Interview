var pxBtn5 = document.querySelector('#px-style-5')
var pxBtn10 = document.querySelector('#px-style-10')
var nameTag = document.querySelector('#name')











var makeBorder5px = () => {
    nameTag.style.borderWidth = "5px"
}


var makeBorder10px = () => {
    nameTag.style.borderWidth = "10px"
}











pxBtn10.addEventListener("click", makeBorder10px)
pxBtn5.addEventListener("click", makeBorder5px)