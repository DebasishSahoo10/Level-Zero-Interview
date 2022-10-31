// Write a function which generates a secret code from a given string, by shifting characters of alphabet by N places. Example:
// Input: encodeString("neogcamp", 2) ––> Output: pgqiecor
// Explanation: 2 represents shifting alphabets by 2 places. a –> c, b –> d, c –> e and so on.

var userString = "neoGcamp"
var alphabetsArray = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"]



var encodeString = () => {
  userString = userString.split("")
  for (let i=0; i<userString.length; i++) {
    var originalIndex = alphabetsArray.indexOf(userString[i].toUpperCase())
    userString[i] = alphabetsArray[originalIndex + 2]
  }
  userString = userString.join("")
  console.log(userString)
}

encodeString()