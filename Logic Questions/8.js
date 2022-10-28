// Write a program to return a Fibonacci series : 0,1,1,2,3,5,8,13,21....

var first = 0;
var second = 1
var third;
for (let i=0; i<10; i++) {
  console.log(first)
  third = second + first
  first = second
  second = third

} 