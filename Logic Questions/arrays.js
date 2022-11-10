// Find sum of an array and display the output . Example [10,4,5,2,5,6,9]

var sumOfArray = (array) => {
    var sum = 0
    for (let i=0; i<array.length; i++) {
      sum = sum + array[i]
    }
    console.log(sum)
  }
  
sumOfArray([10,4,5,2,5,6,9])


// Find average of an array and display the output.

var sumOfArray = (array) => {
    var sum = 0
    for (let i = 0; i < array.length; i++) {
      sum = sum + array[i]
    }
    console.log(sum / array.length)
  }
  
sumOfArray([10, 4, 5, 2, 5, 6, 9])


// Find maximum and minimum of an array

var findExtremeElements = (array) => {
    var maxElement = Math.max(...array)
    var minElement = Math.min(...array)
    console.log(maxElement)
    console.log(minElement)
  }
  
  findExtremeElements([10,4,5,2,5,6,9])