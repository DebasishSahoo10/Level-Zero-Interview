var completeBtn = document.querySelector('#true-btn')
var nonCompleteBtn = document.querySelector('#false-btn')
var trueOutputArea =document.querySelector('#true-output-area')
var falseOutputArea =document.querySelector('#false-output-area')


var tasks = [
    {
        taskName : "Buy Groccersied from Flipkart",
        complete : true
    },
    {
        taskName: "Take coco for walk",
        complete: true
    },
    {
        taskName: "Do Yoga",
        complete: false
    },
    {
        taskName : "Collect Car from wash",
        complete : true
    }
]


var showCompleteTasks = () => {
    falseOutputArea.style.display = "none"
    trueOutputArea.style.display = "block"
    trueOutputArea.innerText = ""
    for (let i=0; i<tasks.length; i++) {
        if (tasks[i].complete == true) {
            var completedList = document.createElement("li")
            completedList.innerHTML = `${tasks[i].taskName}`
            trueOutputArea.appendChild(completedList)
            completedList.style.margin = "2rem"
        }
    }
}

var showNonCompleteTasks = () => {
    falseOutputArea.style.display = "block"
    trueOutputArea.style.display = "none"
    falseOutputArea.innerText = ""
    for (let i=0; i<tasks.length; i++) {
        if (tasks[i].complete == false) {
            var completedList = document.createElement("li")
            completedList.innerHTML = `${tasks[i].taskName}`
            falseOutputArea.appendChild(completedList)
            completedList.style.margin = "2rem"
        }
    }
}


completeBtn.addEventListener("click", showCompleteTasks)
nonCompleteBtn.addEventListener("click", showNonCompleteTasks)