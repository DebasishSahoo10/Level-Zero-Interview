// Given an array of numbers, your function should return an array in the ascending order.
// Example:
// Input: sortArray([100,83,32,9,45,61]) ––> Output: [9,32,45,61,83,100]

var userArray = [100,83,32,9,45,61]
var userArrayCopy = [...userArray]
var array = []


var sortArray = () => {
  for (let i=0; i<userArray.length; i++) {
    var minNumber = Math.min(...userArrayCopy)
    array.push(minNumber)
    userArrayCopy.splice(userArrayCopy.indexOf(minNumber), 1)
  }
  console.log(array)
}


sortArray()


// by using inbuilt javascipt function sort


userArray.sort((a,b) => a - b)
console.log(userArray)