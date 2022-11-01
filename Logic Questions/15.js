// Given an array and two numbers, your function should replace all entries of first number in an array with the second number.
// Example:
// Input: replace([1,5,3,5,6,8], 5, 10) ––> Output: [1,10,3,10,6,8]


var array = [1,5,3,5,6,8]
var replacingNum = 10


var replace = () => {
  for (let i=0; i<array.length; i++) {
    if (array[i] == 5) {
      array[i] = replacingNum
    }
  }
  console.log(array)
}


replace()