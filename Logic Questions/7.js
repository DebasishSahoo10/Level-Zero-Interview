// Write a program to take a number input from user and print multiplication table 12 times for that number.


var array = []


for (let i=1; i<13; i++) {
  var userInputNum = 5
  userInputNum = userInputNum * i
  array.push(userInputNum)
}
console.log(array)


// a simpler solution will be

var userNum = 5

for (let i=1; i<13; i++) {
  console.log(`${userNum} * ${i} = ${userNum * i}`) 
} 