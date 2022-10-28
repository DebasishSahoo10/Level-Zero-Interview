// Write a Program to take a number input from user and find if the number is Prime or not.


var num = 7
var isPrime


for (let i=2; i<num; i++) {
  if (num % i == 0) {
    isPrime = false
    break
  } else {
    isPrime = true
  }
}


if (isPrime == true) {
  console.log("Prime")
} else {
  console.log("Not Prime")
}
