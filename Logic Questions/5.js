// Write program to take a month as an input from the user and find out whether the month has 31 days or not


var userInput = "October"

var monthList = ["january","march","may","july","august","october","december"]

if (monthList.includes(userInput.toLowerCase()) === true) {
  console.log('true')
}

// but if you want to have a more time optimised solutionb then you can use below method as well
var monthListSet = new Set (["january","march","may","july","august","october","december"])

if (monthListSet.has(userInput.toLowerCase()) === true) {
  console.log('true')
}