// Write a program to calculate sum of N natural digits, as input by the users?
// Enter a positive integer: 100
// Sum = 5050


var sumOfIntegers = (x) => {
    var sum = 0
    for (let i=0; i<=x; i++) {
      sum = sum + i
    }
    console.log(sum)
  }
  
  sumOfIntegers(100)