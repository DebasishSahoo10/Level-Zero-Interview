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



  
// Write a Program to Print N Odd Number in Descending Order.
// Input : 4
// Output : 7 5 3 1

var printOddNums = (x) => {
    for (let i=1; i<=(x+x); i++) {
      if (i%2 != 0) {
        console.log(i)
      }
    }
  }
  
  printOddNums(7)