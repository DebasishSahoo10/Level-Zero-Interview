// Given two arrays, your function should return single merged array.
// Example:
// Input: mergeArray([1,3,5], [2,4,6]) ––> Output: [1,3,5,2,4,6]


var arrayOne = [1,3,5]
var arrayTwo = [2,4,6]


console.log(`${arrayOne + "," + arrayTwo}`)


// much detailed and correct way

var outputArray = []

var totalArrayLength = arrayOne.length + arrayTwo.length

var mergeArray = () => {
  for (let i=0; i<arrayOne.length; i++) {
    outputArray.push(arrayOne[i])
  }
  for (let i=0; i<arrayTwo.length; i++) {
    outputArray.push(arrayTwo[i])
  }
  console.log(outputArray)
}

mergeArray()


// by using built in JS functions


var newArray = arrayOne.concat(arrayTwo)
console.log(newArray)