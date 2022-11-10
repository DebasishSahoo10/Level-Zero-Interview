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