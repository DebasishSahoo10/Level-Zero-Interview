// Fizzbuzz - Write a program to return an array from 1 to 100. But for every multiple of 3, replace the number with "Fizz", for every multiple of 5, replace the number with "Buzz" and for every multiples of 3 & 5, replace with "FizzBuzz". Your output should look something like this 1, 2, Fizz, 4, Buzz, Fizz, 7, 8, Fizz, Buzz, 11, Fizz, 13, 14, FizzBuzz, 16, 17 .....


var array = []

for (let i=1; i<101; i++) {
  if (i % 3 == 0 && i % 5 == 0) {
    array.push("FizzBuzz")
  } else if (i % 5 == 0) {
    array.push("Buzz")
  } else if (i % 3 == 0) {
    array.push("Fizz")
  } else {
    array.push(i) 
  }
}

console.log(array)