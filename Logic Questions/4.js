// Write a program to find the maximum and minimum out of two given numbers. The numbers are num1=129 and num2=251 


var num1 = 129
var num2 = 251
var num3 = 344





var checkMax = (a,b,c) => {
  var maxNum = Math.max(a,b,c)
  console.log(maxNum)
}

checkMax(num1,num2,num3)


// if the question was to find minimum number then the code would be : 
// Math.min(a,b,c)