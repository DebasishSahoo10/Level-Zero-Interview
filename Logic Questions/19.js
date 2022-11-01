// Given a and b, your function should return the value of ab
// Example:
// Input: power(2,3) ––> Output: 8


console.log(Math.pow(2,3))


// Given length of a regular hexagon, your function should return area of the hexagon.
// Example:
// Input: areaOfHexagon(10) ––> Output: 259.8


console.log((3 * Math.sqrt(3) * (10 * 10)) / 2)



// Given n numbers, your function should return the minimum of them all. The number of parameters won't be accepted from user.
// Example:
// Input: findMin(3,5) ––> Output: 3
// Input: findMin(3,5,9,1) ––> Output: 1


var findMin = (...n) => {
  console.log(Math.min(...n))
}

findMin(3,5)
findMin(3,5,9,1)